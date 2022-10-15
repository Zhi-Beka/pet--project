/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    ReactNode,
    useCallback,
    useRef,
    useState,
    useEffect,
} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    // eslint-disable-next-line object-curly-newline
    const { className, children, isOpened, onClose, lazy } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );
    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onKeyDown]);

    useEffect(() => {
        if (isOpened) {
            setIsMounted(true);
        }
    }, [isOpened]);

    const handleContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpened,
        [cls.closed]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={handleContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
