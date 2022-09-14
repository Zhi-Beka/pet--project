import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Counter from "./components/Counter";
import "./index.scss";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/mainPage/MainPage.lazy";

const App = () => {
  return (
    <div className="App">
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
