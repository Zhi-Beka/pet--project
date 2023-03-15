import { Route, Routes } from "react-router-dom";
import { memo, Suspense, useCallback } from "react";
import { PageLoader } from "widgets/PageLoader";
import { AppRoutesProps, routeConfig } from "../config/routeConfig";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const routeWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(routeWrapper)}</Routes>;
};

export default memo(AppRouter);
