import { Link } from "react-router";
import { usePokemon } from "../contexts/Pokemon";

export default function PokemonCard({ pokemon }) {
    const { toggleFavorite, isFavorite } = usePokemon();

    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-gray-800">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/").slice(-2, -1)[0]
                }.png`}
                alt={pokemon?.name}
                className="w-full object-cover rounded-md"
            />
            <div className="flex justify-between items-center mt-2">
                <h3 className="text-lg font-semibold capitalize">
                    {pokemon?.name}
                </h3>
                <button
                    onClick={() => toggleFavorite(pokemon)}
                    className="hover:scale-105 transition-transform"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isFavorite(pokemon) ? "red" : "none"}
                        stroke={isFavorite(pokemon) ? "red" : "currentColor"}
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
            <Link
                to={`/pokemon/${pokemon.name}`}
                className="bg-blue-500 text-white px-4 py-2 block text-center rounded-md mt-2 hover:bg-blue-600"
            >
                View Details
            </Link>
        </div>
    );
}
