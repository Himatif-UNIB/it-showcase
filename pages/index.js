import { useState } from "react"
import Layout from "../sections/Layout"

import { Header, Searchbar, ShowcasesItems } from "../components/ShowcasesPage"
import { TypeList, CategoryList } from "../components/ShowcasesPage/Sidebar"

export default function Home() {
    const [expandedFilter, setExpandedFilter] = useState(false)

    // All filters state define here
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [search, setSearch] = useState("")

    const toggleExpandedFilter = () => {
        setExpandedFilter(!expandedFilter)
    }

    return (
        <Layout>
            <Header />

            <section className="mt-12">
                <Searchbar toggleExpandedFilter={toggleExpandedFilter} />
                <div className="mt-5 grid grid-cols-4 gap-6">
                    <aside className={expandedFilter ? "col-span-0 hidden" : "col-span-1"}>
                        <TypeList />
                        <CategoryList />
                    </aside>
                    <ShowcasesItems expandedFilter={expandedFilter} />
                </div>
            </section>
        </Layout>
    )
}
