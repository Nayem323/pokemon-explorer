import { Link } from "react-router";
import logo from "../assets/images/logo.webp";
import { usePokemon } from "../contexts/Pokemon";

export default function Nav() {
    const { handleSearch, searchString } = usePokemon();
    return (
        <header className="bg-blue-600 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="w-16">
                    <img
                        src={logo}
                        className="logo react"
                        alt="Pokemon Explorer"
                    />
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
