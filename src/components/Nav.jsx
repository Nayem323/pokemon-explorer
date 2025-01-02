import { Link } from "react-router";
import logo from "../assets/images/logo.webp";

export default function Nav() {
    return (
        <header className="bg-blue-600 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link
                    to="/"
                    className="flex items-center text-xl font-bold text-white"
                >
                    <img
                        src={logo}
                        className="w-16 mr-2"
                        alt="Pokemon Explorer"
                    />
                    Pokémon Explorer
                </Link>

                <nav>
                    <Link
                        to="/"
                        className="text-md font-semibold text-white hover:text-yellow-300 mr-8"
                    >
                        Home
                    </Link>
                    <Link
                        to="/favorites"
                        className="text-md font-semibold text-white hover:text-yellow-300"
                    >
                        Favorites
                    </Link>
                </nav>
            </div>
        </header>
    );
}
