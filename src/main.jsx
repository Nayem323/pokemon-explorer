import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import PokemonProvider from "./contexts/Pokemon.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <PokemonProvider>
        <RouterProvider router={router} />
        <ToastContainer />
    </PokemonProvider>
);
