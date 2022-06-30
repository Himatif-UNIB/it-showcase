import { useState } from "react"
import Layout from "../sections/Layout"

import { Header, Searchbar, ShowcasesItems } from "../components/ShowcasesPage"
import { TypeList, CategoryList } from "../components/ShowcasesPage/Sidebar"

export default function Home() {
    const [expandedFilter, setExpandedFilter] = useState(false)

    // All filters state define here
    const [categories, setCategories] = useState([])
    const [type, setType] = useState("")
    const [technologies, setTechnologies] = useState([])
    const [search, setSearch] = useState("")

    return (
        <Layout>
            <Header />

            <section className="mt-12">
                <Searchbar setSearch={(value) => setSearch(value)} toggleExpandedFilter={() => setExpandedFilter(!expandedFilter)} />
                <div className="mt-5 grid grid-cols-4 gap-6">
                    <aside className={expandedFilter ? "col-span-0 hidden" : "col-span-1"}>
                        <TypeList toggle={(type) => setType(type)} />
                        <CategoryList
                            selected={categories}
                            toggle={(category) =>
                                setCategories((currentCategories) =>
                                    currentCategories.includes(category) ? currentCategories.filter((currentCategory) => currentCategory !== category) : currentCategories.concat(category)
                                )
                            }
                        />
                    </aside>
                    <ShowcasesItems categories={categories} search={search} type={type} expandedFilter={expandedFilter} />
                </div>
            </section>
        </Layout>
    )
}
