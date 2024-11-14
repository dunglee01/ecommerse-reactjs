import { useState } from 'react';
import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const value = {
        toast
    };

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer autoClose={1000} hideProgressBar />
        </ToastContext.Provider>
    );
};
