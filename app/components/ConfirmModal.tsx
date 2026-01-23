"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { HiExclamationCircle, HiCheckCircle, HiInformationCircle, HiX } from 'react-icons/hi';

interface ModalOptions {
    title: string;
    message: string;
    type?: 'alert' | 'confirm';
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

interface ModalContextType {
    showAlert: (title: string, message: string) => Promise<void>;
    showConfirm: (title: string, message: string, confirmText?: string, cancelText?: string) => Promise<boolean>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<(ModalOptions & { resolve: (val: any) => void }) | null>(null);

    const showAlert = useCallback((title: string, message: string) => {
        return new Promise<void>((resolve) => {
            setModal({
                title,
                message,
                type: 'alert',
                confirmText: 'OK',
                resolve,
            });
        });
    }, []);

    const showConfirm = useCallback((title: string, message: string, confirmText = 'Confirm', cancelText = 'Cancel') => {
        return new Promise<boolean>((resolve) => {
            setModal({
                title,
                message,
                type: 'confirm',
                confirmText,
                cancelText,
                resolve,
            });
        });
    }, []);

    const handleConfirm = () => {
        if (modal) {
            modal.resolve(true);
            setModal(null);
        }
    };

    const handleCancel = () => {
        if (modal) {
            modal.resolve(false);
            setModal(null);
        }
    };

    return (
        <ModalContext.Provider value={{ showAlert, showConfirm }}>
            {children}
            {modal && (
                <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-[var(--color-23)] animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="p-6 border-b border-[var(--color-23)] flex items-center justify-between bg-[var(--color-25)]">
                            <h3 className="text-xl font-bold text-[var(--color-16)]">{modal.title}</h3>
                            <button
                                onClick={handleCancel}
                                className="p-2 hover:bg-[var(--color-24)] rounded-xl transition-colors text-[var(--color-21)]"
                            >
                                <HiX size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <p className="text-[var(--color-19)] font-medium leading-relaxed">{modal.message}</p>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-[var(--color-23)] bg-[var(--color-25)] flex justify-end gap-3">
                            {modal.type === 'confirm' && (
                                <button
                                    onClick={handleCancel}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-[var(--color-20)] hover:bg-[var(--color-24)] transition-all"
                                >
                                    {modal.cancelText}
                                </button>
                            )}
                            <button
                                onClick={handleConfirm}
                                className="px-6 py-2.5 bg-[var(--color-7)] text-white rounded-xl text-sm font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                {modal.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};
