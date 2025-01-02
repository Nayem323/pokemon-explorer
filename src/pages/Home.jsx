import Loading from "../components/Loading";
import { usePokemon } from "../contexts/Pokemon";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import Toolbar from "../components/Toolbar";

export default function Home() {
    const { filteredPokemons, loading } = usePokemon();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center">
                Explore Pokémon
            </h2>
            <Toolbar />
            {filteredPokemons.length === 0 ? (
                <p className="text-center text-white text-4xl mt-60">
                    {"Nothing found."}
                </p>
            ) : (
                <div className="mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {filteredPokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        ))}
                    </div>
                    <Pagination />
                </div>
            )}
            {loading && <Loading />}
        </>
    );
}
