import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/mainPage/MainPage.lazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> change color</button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
