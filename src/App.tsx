import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/mainPage/MainPage.lazy";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return (
    <div className={`app ${theme}`}>
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
