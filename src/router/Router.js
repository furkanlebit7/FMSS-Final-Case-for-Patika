//PACKAGES
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Starships from "../pages/StarShips";

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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
