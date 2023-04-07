import { StateSchema } from "app/providers/StoreProvider";
import { getScrollByPath, scrollActions } from "features/saveScrollPosition";
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import useInfiniteScroll from "shared/lib/hooks/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

import cls from "./Page.module.scss";

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page = memo((props: PageProps) => {
    const { children, className, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollByPath(state, pathname)
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScrollPosition = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        );
    }, 1000);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScrollPosition}
        >
            {children}

            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
export default Page;
