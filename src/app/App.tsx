/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback=''>
                <Navbar />

                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
