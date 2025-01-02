import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Favorites from "../pages/Favorites";
import PokemonDetails from "../pages/PokemonDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "*", element: <NotFound /> },
            { path: "/", element: <Home /> },
            { path: "/pokemon/:name", element: <PokemonDetails /> },
            { path: "/favorites", element: <Favorites /> },
        ],
    },
]);
