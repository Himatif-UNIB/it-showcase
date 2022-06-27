export default function Searchbar({ toggleExpandedFilter }) {
    return (
        <div className="flex items-center">
            <button className="rounded-full p-2 transition-all duration-200 ease-in hover:bg-dark-500" onClick={() => toggleExpandedFilter()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
            </button>
            <div className="relative ml-6 w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    className="revue-form-field block w-full rounded-lg bg-dark-800 px-2.5 py-3 pl-10 text-sm text-white placeholder-gray-500 transition-all duration-200 ease-in-out hover:bg-dark-500 focus:outline-none"
                    placeholder="Search..."
                    type="text"
                />
            </div>
        </div>
    )
}
