import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const [totalPages, setTotalPages] = useState(0);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [searchString, setSearchString] = useState("");
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [sortingType, setSortingType] = useState("");

    useEffect(() => {
        let fetchUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000";
        if (selectedType) {
            fetchUrl = `https://pokeapi.co/api/v2/type/${selectedType}`;
        }

        const fetchPokemons = async () => {
            try {
                const response = await fetch(fetchUrl);
                const data = await response.json();
                if (!selectedType) {
                    setPokemons(data.results);
                    if (data.count) {
                        setTotalPokemons(data.count);
                        setTotalPages(Math.ceil(data.count / perPage));
                    }
                } else {
                    let filterdPokemons = [];
                    for (const pokemon of data.pokemon) {
                        filterdPokemons.push(pokemon.pokemon);
                    }
                    setPokemons(filterdPokemons);
                    if (data.pokemon.length) {
                        setTotalPokemons(data.pokemon.length);
                        setTotalPages(Math.ceil(data.pokemon.length / perPage));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch Pokémon:", error);
            }
        };
        setCurrentPage(1);
        fetchPokemons();
    }, [selectedType]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/type");
                const data = await response.json();
                setTypes(data.results);
            } catch (error) {
                console.error("Failed to fetch Pokémon type:", error);
            }
        };
        fetchTypes();
    }, []);

    useEffect(() => {
        setLoading(true);
        let filteredData = pokemons.filter((pokemon) =>
            pokemon.name.includes(searchString)
        );
        setTotalPokemons(filteredData.length);
        setTotalPages(Math.ceil(filteredData.length / perPage));
        filteredData = filteredData.slice(
            (currentPage - 1) * perPage,
            currentPage * perPage
        );
        if (sortingType === "name-asc") {
            filteredData = filteredData.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (sortingType === "name-desc") {
            filteredData = filteredData.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }
        setFilteredPokemons(filteredData);
        setLoading(false);
    }, [currentPage, perPage, pokemons, searchString, sortingType]);

    const isFavorite = (pokemon) => favorites.includes(pokemon);

    const toggleFavorite = (pokemon) => {
        const isFavorite = favorites.includes(pokemon);
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav !== pokemon));
            toast.info(`${pokemon.name} removed from favorites`, {
                position: "bottom-right",
            });
        } else {
            setFavorites([...favorites, pokemon]);
            toast.success(`${pokemon.name} added to favorites`, {
                position: "bottom-right",
            });
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (search) => {
        setSearchString(search);
        setCurrentPage(1);
    };

    const handleFilter = (type) => {
        setSelectedType(type);
    };

    const handleSorting = (type) => {
        setSortingType(type);
        setCurrentPage(1);
    };

    return (
        <PokemonContext.Provider
            value={{
                pokemons,
                filteredPokemons,
                loading,
                isFavorite,
                toggleFavorite,
                favorites,
                totalPokemons,
                totalPages,
                currentPage,
                handlePageChange,
                searchString,
                handleSearch,
                perPage,
                types,
                handleFilter,
                handleSorting,
                selectedType,
                sortingType,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => {
    return useContext(PokemonContext);
};

export default PokemonProvider;
