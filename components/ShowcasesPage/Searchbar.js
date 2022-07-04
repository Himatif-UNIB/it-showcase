export default function Searchbar({ setSearch, toggleExpandedFilter }) {
    return (
        <div className="flex items-center">
            <button className="hover:bg-dark-500 hidden rounded-full p-2 transition-all duration-200 ease-in md:block" onClick={() => toggleExpandedFilter()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
            </button>
            <div className="relative w-full md:ml-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        setSearch(event.target.elements.search.value)
                    }}
                >
                    <input
                        type="search"
                        id="search"
                        name="search"
                        className="revue-form-field hover:bg-dark-500 block w-full rounded-lg border border-gray-500 bg-light-dark px-2.5 py-3 pl-10 text-sm text-white placeholder-gray-500 transition-all duration-200 ease-in-out focus:border-gray-900 focus:outline-none"
                        placeholder="Search..."
                        onChange={(event) => {
                            if (event.target.value.length === 0) {
                                setSearch("")
                            }
                        }}
                    />
                </form>
            </div>
        </div>
    )
}
