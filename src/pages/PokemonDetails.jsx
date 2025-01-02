import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

export default function PokemonDetails() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${name}`
                );
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Failed to fetch Pokémon:", error);
            }
        };
        getPokemon();
    }, [name]);

    return (
        <>
            {pokemon ? (
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold capitalize text-gray-800">
                                {pokemon.name}
                            </h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Pokémon ID: #{pokemon.id}
                            </p>
                            <img
                                src={
                                    pokemon.sprites.other["official-artwork"]
                                        .front_default
                                }
                                alt={pokemon.name}
                                className="mx-auto mt-4 w-64 h-64 object-contain"
                            />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Abilities
                            </h2>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {pokemon.abilities.map((ability) => (
                                    <li
                                        key={ability.ability.name}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg capitalize"
                                    >
                                        {ability.ability.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Types
                            </h2>
                            <ul className="mt-4 flex gap-2">
                                {pokemon.types.map((type) => (
                                    <li
                                        key={type.type.name}
                                        className={`px-4 py-2 rounded-lg capitalize text-white ${
                                            type.type.name === "fire"
                                                ? "bg-red-500"
                                                : type.type.name === "water"
                                                ? "bg-blue-500"
                                                : type.type.name === "grass"
                                                ? "bg-green-500"
                                                : "bg-gray-500"
                                        }`}
                                    >
                                        {type.type.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Height and Weight
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Height: {pokemon.height / 10} m
                            </p>
                            <p className="mt-1 text-gray-600">
                                Weight: {pokemon.weight / 10} kg
                            </p>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Base Experience
                            </h2>
                            <p className="mt-2 text-gray-600">
                                {pokemon.base_experience}
                            </p>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Stats
                            </h2>
                            <ul className="mt-4">
                                {pokemon.stats.map((stat) => (
                                    <li
                                        key={stat.stat.name}
                                        className="flex justify-between items-center border-b py-2"
                                    >
                                        <span className="capitalize text-gray-800">
                                            {stat.stat.name}
                                        </span>
                                        <span className="font-bold text-gray-800">
                                            {stat.base_stat}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
