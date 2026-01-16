import { Download, Filter, Search, Upload } from "lucide-react"

interface TableFiltersProps {
    searchTerm: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableFilters = ({ searchTerm, handleSearch }: TableFiltersProps) => {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-90">
                    <input
                        type="text"
                        placeholder="Search Orders (Provide comma separated IDs)"
                        className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring focus:ring-blue-500 shadow-sm"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>

                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-colors cursor-pointer">
                    <Filter className="h-4 w-4" />
                    Filters
                </button>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-800 rounded-lg text-sm font-medium text-blue-800 hover:bg-blue-50 shadow-sm transition-colors cursor-pointer">
                    Export
                    <Upload className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-800 rounded-lg text-sm font-medium text-blue-800 hover:bg-blue-50 shadow-sm transition-colors cursor-pointer">
                    Import
                    <Download className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default TableFilters;
