import { usePokemon } from "../contexts/Pokemon";

export default function Toolbar() {
    const {
        searchString,
        handleSearch,
        types,
        selectedType,
        handleFilter,
        handleSorting,
        sortingType,
    } = usePokemon();

    return (
        <div className="flex flex-wrap items-center justify-between p-4 bg-gray-100 shadow-md rounded-md mb-8">
            {/* Filter Dropdown */}
            <div className="flex items-center space-x-2">
                <label
                    htmlFor="filter"
                    className="text-sm font-medium text-gray-700"
                >
                    Filter by Type:
                </label>
                <select
                    id="filter"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 capitalize"
                    value={selectedType}
                    onChange={(e) => handleFilter(e.target.value)}
                >
                    <option value="">All</option>
                    {types &&
                        types.map((type) => (
                            <option key={type.name} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                </select>
            </div>

            {/* Search Input */}
            <div className="flex items-center space-x-2 md:mt-0 mt-4">
                <label
                    htmlFor="search"
                    className="text-sm font-medium text-gray-700"
                >
                    Search:
                </label>
                <input
                    id="search"
                    type="text"
                    value={searchString}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search Pokémon..."
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 md:mt-0 mt-4">
                <label
                    htmlFor="sort"
                    className="text-sm font-medium text-gray-700"
                >
                    Sort:
                </label>
                <select
                    id="sort"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    value={sortingType}
                    onChange={(e) => handleSorting(e.target.value)}
                >
                    <option value="">Default</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>
        </div>
    );
}
