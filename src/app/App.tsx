import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserIsLogged, userActions } from "entities/User";

function App() {
    const isLogged = useSelector(getUserIsLogged);
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
                    {isLogged && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
