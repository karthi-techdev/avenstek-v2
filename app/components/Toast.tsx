"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { HiCheckCircle, HiExclamationCircle, HiX, HiInformationCircle } from 'react-icons/hi';

type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
    id: string;
    type: ToastType;
    title: string;
    message: string;
}

interface ToastContextType {
    showToast: (type: ToastType, title: string, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        // If we're in admin panel, it might be using the other ToastProvider. 
        // But we'll try to unify them.
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = useCallback((type: ToastType, title: string, message: string) => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { id, type, title, message }]);

        // Auto remove after 3.5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-5 right-5 z-[100001] flex flex-col gap-3">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`min-w-[300px] max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden pointer-events-auto flex animate-in slide-in-from-right-10 duration-300 border border-gray-100 ${toast.type === 'success' ? 'border-l-[6px] border-l-green-500' :
                                toast.type === 'error' ? 'border-l-[6px] border-l-red-500' : 'border-l-[6px] border-l-[var(--color-7)]'
                            }`}
                    >
                        <div className="p-5 flex gap-4 items-start w-full">
                            <div className="flex-shrink-0 mt-0.5">
                                {toast.type === 'success' && <HiCheckCircle className="text-green-500 text-2xl" />}
                                {toast.type === 'error' && <HiExclamationCircle className="text-red-500 text-2xl" />}
                                {toast.type === 'info' && <HiInformationCircle className="text-[var(--color-7)] text-2xl" />}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-900 mb-1">{toast.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">{toast.message}</p>
                            </div>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 p-1.5 rounded-lg"
                            >
                                <HiX size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
