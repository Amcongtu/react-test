import { useCallback, useState } from "react";

export interface UseDisclosureReturn {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}

export const useDisclosure = (defaultIsOpen = false): UseDisclosureReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

    const onOpen = useCallback(() => setIsOpen(true), []);
    const onClose = useCallback(() => setIsOpen(false), []);
    const onToggle = useCallback(() => setIsOpen(prev => !prev), []);

    return {
        isOpen,
        onOpen,
        onClose,
        onToggle,
    };
};
