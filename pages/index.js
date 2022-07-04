import { useState } from "react"
import Layout from "../sections/Layout"
import axios from "../config"

import { Header, Searchbar, ShowcasesItems } from "../components/ShowcasesPage"
import { TypeLists, CategoryLists, UserLists } from "../components/ShowcasesPage/Sidebar"
import Close from "../components/Icons/Close"

export default function Home({ initialCategories, initialShowcases }) {
    const [expandedFilter, setExpandedFilter] = useState(false)

    // All filters state define here
    const [categories, setCategories] = useState([])
    const [type, setType] = useState("")
    const [technologies, setTechnologies] = useState([])
    const [search, setSearch] = useState("")

    const clearAllFilters = () => {
        setCategories([])
        setType("")
        setSearch("")
        setExpandedFilter(false)
    }

    return (
        <Layout>
            <Header />

            <section className="mt-12 px-6">
                <Searchbar setSearch={(value) => setSearch(value)} toggleExpandedFilter={() => setExpandedFilter(!expandedFilter)} />
                <div className="mt-5 pb-20 md:grid md:grid-cols-4 md:gap-6 md:pb-0">
                    <aside
                        className={
                            (expandedFilter ? "md:col-span-0 translate-y-0 md:hidden" : "translate-y-[100%] md:col-span-1 md:translate-y-0") +
                            " ease-[cubic-bezier(0.45, 0, 0.55, 1)] fixed inset-0 h-screen overflow-y-scroll bg-dark px-6 transition-all duration-[400ms] md:static md:h-auto md:w-auto md:overflow-y-hidden md:bg-transparent md:px-0"
                        }
                    >
                        <SmallHeader setExpandedFilter={setExpandedFilter} />
                        <UserLists />
                        <TypeLists selected={type} toggle={(type) => setType((currentType) => (type !== currentType ? type : ""))} />
                        <CategoryLists
                            initialCategories={initialCategories}
                            selected={categories}
                            toggle={(category) =>
                                setCategories((currentCategories) =>
                                    currentCategories.includes(category) ? currentCategories.filter((currentCategory) => currentCategory !== category) : currentCategories.concat(category)
                                )
                            }
                        />
                        <SmallButtonAction clearAllFilters={clearAllFilters} setExpandedFilter={setExpandedFilter} />
                    </aside>
                    <ShowcasesItems initialShowcases={initialShowcases} categories={categories} search={search} type={type} expandedFilter={expandedFilter} />
                    <FilterButton expandedFilter={expandedFilter} setExpandedFilter={setExpandedFilter} />
                </div>
            </section>
        </Layout>
    )
}

const getShowcasesData = async () => {
    const { data } = await axios.get("/showcases?page=1")
    return data
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

function SmallButtonAction({ clearAllFilters, setExpandedFilter }) {
    return (
        <div className="sticky bottom-0 block w-full border-t border-dashed border-gray-500 bg-dark py-4 md:hidden">
            <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-gray-700 px-6 py-3 text-lg font-medium" onClick={() => clearAllFilters()}>
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

export async function getServerSideProps() {
    const categories = await axios.get("/showcases/categories")
    const initialCategories = categories.data
    const initialShowcases = await getShowcasesData()

    return {
        props: {
            initialCategories,
            initialShowcases,
        },
    }
}
