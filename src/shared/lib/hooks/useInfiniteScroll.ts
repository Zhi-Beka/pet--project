import { MutableRefObject, useEffect } from "react";

export interface useInfiniteScrollOptions {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

const useInfiniteScroll = (props: useInfiniteScrollOptions) => {
    const { callback, wrapperRef, triggerRef } = props;
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperRefElement = wrapperRef.current;
        const triggerRefElement = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperRefElement,
                rootMargin: "0px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer?.observe(triggerRefElement);
        }

        return () => {
            if (observer && triggerRefElement) {
                // debugger;
                observer.unobserve(triggerRefElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};

export default useInfiniteScroll;
