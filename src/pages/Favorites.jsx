import { usePokemon } from "../contexts/Pokemon";
import PokemonCard from "../components/PokemonCard";

export default function Favorites() {
    const { favorites } = usePokemon();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center">
                Your Favorites Pokémon
            </h2>

            {favorites.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favorites.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-white text-4xl mt-60">
                    {"You don't have any favorite Pokémon yet."}
                </p>
            )}
        </>
    );
}
