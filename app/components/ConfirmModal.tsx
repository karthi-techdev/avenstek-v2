"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { HiExclamationCircle, HiCheckCircle, HiInformationCircle, HiX } from 'react-icons/hi';

interface ModalOptions {
    title: string;
    message: string;
    type?: 'alert' | 'confirm' | 'prompt';
    defaultValue?: string;
    placeholder?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

interface ModalContextType {
    showAlert: (title: string, message: string) => Promise<void>;
    showConfirm: (title: string, message: string, confirmText?: string, cancelText?: string) => Promise<boolean>;
    showPrompt: (title: string, message: string, defaultValue?: string, placeholder?: string) => Promise<string | null>;
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
    const [promptValue, setPromptValue] = useState('');

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

    const showPrompt = useCallback((title: string, message: string, defaultValue = '', placeholder = '') => {
        setPromptValue(defaultValue);
        return new Promise<string | null>((resolve) => {
            setModal({
                title,
                message,
                type: 'prompt',
                defaultValue,
                placeholder,
                confirmText: 'Submit',
                cancelText: 'Cancel',
                resolve,
            });
        });
    }, []);

    const handleConfirm = () => {
        if (modal) {
            if (modal.type === 'prompt') {
                modal.resolve(promptValue);
            } else {
                modal.resolve(true);
            }
            setModal(null);
            setPromptValue('');
        }
    };

    const handleCancel = () => {
        if (modal) {
            if (modal.type === 'prompt') {
                modal.resolve(null);
            } else {
                modal.resolve(false);
            }
            setModal(null);
            setPromptValue('');
        }
    };

    return (
        <ModalContext.Provider value={{ showAlert, showConfirm, showPrompt }}>
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
                        <div className="p-6 space-y-4">
                            <p className="text-[var(--color-19)] font-medium leading-relaxed">{modal.message}</p>
                            {modal.type === 'prompt' && (
                                <input
                                    autoFocus
                                    type="text"
                                    value={promptValue}
                                    onChange={(e) => setPromptValue(e.target.value)}
                                    placeholder={modal.placeholder}
                                    className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm font-bold text-[var(--color-16)] outline-none focus:ring-2 focus:ring-[var(--color-7)]/20 transition-all"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleConfirm();
                                        if (e.key === 'Escape') handleCancel();
                                    }}
                                />
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-[var(--color-23)] bg-[var(--color-25)] flex justify-end gap-3">
                            {(modal.type === 'confirm' || modal.type === 'prompt') && (
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
