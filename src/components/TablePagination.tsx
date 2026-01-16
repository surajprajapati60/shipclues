import { ChevronLeft, ChevronRight } from "lucide-react";


interface TablePaginationProps {
    itemsPerPage: number;
    setItemsPerPage: (itemsPerPage: number) => void;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

const TablePagination = ({
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    handlePageChange
}: TablePaginationProps) => {

    return (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-8 md:flex-row flex-col">
            <div className="flex items-center gap-2">
                <span className="text-sm text-blue-800 font-medium">Rows per page</span>
                <select
                    className="text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-blue-500 bg-white"
                    value={itemsPerPage}
                    onChange={(e) => {
                        setItemsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                    }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 disabled:text-gray-300 disabled:cursor-not-allowed hover:text-blue-900 cursor-pointer"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                </button>

                <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors
                                        ${currentPage === page
                                    ? 'bg-blue-800 text-white shadow-sm'
                                    : 'text-blue-700 hover:bg-blue-50'
                                }
                                    `}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 disabled:text-gray-300 disabled:cursor-not-allowed hover:text-blue-900 cursor-pointer"
                >
                    Next
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default TablePagination;