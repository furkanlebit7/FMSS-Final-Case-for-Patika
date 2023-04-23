//PACKAGES
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Starships from "../pages/StarShips";
import StarshipDetail from "../pages/StarshipDetail";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "starships",
        element: <Starships />,
      },
      {
        path: "gallery",
        element: <About />,
      },
      {
        path: "starship/:id",
        element: <StarshipDetail />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
