import { Outlet } from "react-router";
import Nav from "../components/Nav";

export default function Root() {
    return (
        <div className="bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500 text-white">
            <Nav />
            <main className="container mx-auto p-4 py-6 min-h-screen h-fit">
                <Outlet />
            </main>
        </div>
    );
}
