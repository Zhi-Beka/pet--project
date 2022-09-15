import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage/";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> change color</button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
