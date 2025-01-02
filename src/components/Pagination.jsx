import { usePokemon } from "../contexts/Pokemon";

export default function Pagination() {
    const {
        totalPages,
        currentPage,
        handlePageChange,
        perPage,
        filteredPokemons,
        totalPokemons,
    } = usePokemon();

    return (
        <div className="flex items-center justify-between mt-8">
            <div className="text-center text-white text-sm">
                Showing {(currentPage - 1) * perPage + 1} - {}{" "}
                {currentPage * perPage > totalPokemons
                    ? totalPokemons
                    : totalPages == 1
                    ? filteredPokemons.length
                    : currentPage * perPage}{" "}
                Pokémon out of {totalPokemons}
            </div>
            {totalPages > 1 && (
                <div className="flex items-center justify-center">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 bg-red-500 text-white rounded-md mr-2 ${
                            currentPage === 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-red-700"
                        }`}
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex space-x-2">
                        {/* First 3 pages */}
                        {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1;

                            // Show first 3 pages, the 2 previous and 2 next pages around current page, and last 3 pages
                            if (Math.abs(page - currentPage) <= 2) {
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-4 py-2 rounded-md text-sm ${
                                            page === currentPage
                                                ? "bg-red-500 text-white"
                                                : "bg-white text-red-500 border border-red-500"
                                        } hover:bg-red-700 hover:text-white hover:border-red-700`}
                                    >
                                        {page}
                                    </button>
                                );
                            }

                            // Render ellipsis when needed
                            if (
                                page === currentPage - 3 ||
                                page === currentPage + 3
                            ) {
                                return (
                                    <span
                                        key={`ellipsis-${page}`}
                                        className="px-4 py-2 rounded-md text-sm bg-white text-red-500 border border-red-500"
                                    >
                                        ...
                                    </span>
                                );
                            }

                            return null;
                        })}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 bg-red-500 text-white rounded-md ml-2 ${
                            currentPage === totalPages
                                ? "opacity-90 cursor-not-allowed"
                                : "hover:bg-red-700"
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
