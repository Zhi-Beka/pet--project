import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { routeConfig } from "../config/routeConfig";
import { log } from "console";

export const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

//export default AppRouter;
