import { useContext, useEffect, useState } from "react"
import Layout from "../sections/Layout"
import { Header } from "../components/ShowcasesPage"
import { Searchbar, ShowcasesItems } from "../components/ShowcasesPage"
import { TypeLists, CategoryLists, UserLists } from "../components/ShowcasesPage/Sidebar"
import FilterContext from "../helpers/filter/FilterContext"
import { useRouter } from "next/router"
import Close from "../components/Icons/Close"
import axios from "../config"

export default function Home({ initialCategories, initialShowcases }) {
    const router = useRouter()
    const [expandedFilter, setExpandedFilter] = useState(false)

    // All filters state define here
    const filterContext = useContext(FilterContext)
    const selectedCategories = filterContext.selectedCategories
    const selectedType = filterContext.selectedType
    const searchQuery = filterContext.searchQuery

    useEffect(() => {
        const pathname = window.location.pathname
        router.push(`${pathname}?search=${searchQuery}&categories=${selectedCategories}&type=${selectedType}`)
    }, [selectedCategories, selectedType, searchQuery])

    return (
        <Layout>
            <Header />

            <section className="mt-12 px-6">
                <>
                    <Searchbar toggleExpandedFilter={() => setExpandedFilter(!expandedFilter)} />
                    <div className="mt-5 pb-20 md:grid md:grid-cols-4 md:gap-6 md:pb-0">
                        <aside
                            className={
                                (expandedFilter ? "md:col-span-0 translate-y-0 md:hidden" : "translate-y-[100%] md:col-span-1 md:translate-y-0") +
                                " ease-[cubic-bezier(0.45, 0, 0.55, 1)] fixed inset-0 h-screen overflow-y-scroll bg-dark px-6 transition-all duration-[400ms] md:static md:h-auto md:w-auto md:overflow-y-hidden md:bg-transparent md:px-0"
                            }
                        >
                            <SmallHeader setExpandedFilter={setExpandedFilter} />
                            {/* <UserLists /> */}
                            <TypeLists />
                            <CategoryLists initialCategories={initialCategories} />
                            <SmallButtonAction handleClearAllFilters={filterContext.handleClearAllFilters} setExpandedFilter={setExpandedFilter} />
                        </aside>
                        <ShowcasesItems
                            initialShowcases={initialShowcases}
                            selectedCategories={selectedCategories}
                            selectedType={selectedType}
                            searchQuery={searchQuery}
                            expandedFilter={expandedFilter}
                        />
                        <FilterButton expandedFilter={expandedFilter} setExpandedFilter={setExpandedFilter} />
                    </div>
                </>
            </section>
        </Layout>
    )
}

const getShowcasesData = async (selectedCategories = "", search = "", type = "") => {
    const categories = selectedCategories.split(",").map(Number)
    const categoriesString = categories.map((category) => `categories[]=${category}`).join("&")
    const searchString = search ? `&search=${search}` : ""
    const typeString = type ? `&type=${type}` : ""
    const { data } = await axios.get(`/showcases?${categoriesString}${searchString}${typeString}`)
    return data
}

export async function getServerSideProps({ query }) {
    const categories = await axios.get("/showcases/categories")
    const initialCategories = categories.data
    const initialShowcases = await getShowcasesData(query.categories, query.search, query.type)
    console.log("Initial Categories ", initialCategories)

    return {
        props: {
            initialCategories,
            initialShowcases,
        },
    }
}

function FilterButton({ expandedFilter, setExpandedFilter }) {
    return (
        <div
            className={
                (expandedFilter ? "translate-y-[100%]" : "translate-y-0") +
                " ease-[cubic-bezier(0.45, 0, 0.55, 1)] fixed right-0 left-0 bottom-0 block w-full py-3 transition-all duration-[400ms] md:hidden"
            }
        >
            <div className="flex justify-center">
                <button className="rounded-xl bg-blue-500 px-36 py-3 font-semibold text-white" onClick={() => setExpandedFilter(true)}>
                    Filter
                </button>
            </div>
        </div>
    )
}

function SmallButtonAction({ handleClearAllFilters, setExpandedFilter }) {
    return (
        <div className="sticky bottom-0 block w-full border-t border-dashed border-gray-500 bg-dark py-4 md:hidden">
            <div className="grid grid-cols-2 gap-3">
                <button
                    className="rounded-xl bg-gray-700 px-6 py-3 text-lg font-medium"
                    onClick={() => {
                        handleClearAllFilters()
                        setExpandedFilter(false)
                    }}
                >
                    Clear All
                </button>
                <button className="rounded-xl bg-blue-500 px-6 py-3 text-lg font-medium" onClick={() => setExpandedFilter(false)}>
                    Done
                </button>
            </div>
        </div>
    )
}

function SmallHeader({ setExpandedFilter }) {
    return (
        <div className="flex w-full justify-between md:hidden">
            <div></div>
            <h5 className="py-4 text-center text-xl font-semibold">Filters</h5>
            <button onClick={() => setExpandedFilter(false)}>
                <Close />
            </button>
        </div>
    )
}
