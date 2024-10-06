import { useState } from 'react';
import { createContext } from 'react';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const value = { isOpen, setIsOpen };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
