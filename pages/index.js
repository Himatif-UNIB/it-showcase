import { useState } from "react"
import Layout from "../sections/Layout"
import axios from "../config"

import { Header, Searchbar, ShowcasesItems } from "../components/ShowcasesPage"
import { TypeLists, CategoryLists, UserLists } from "../components/ShowcasesPage/Sidebar"

export default function Home({ initialCategories, initialShowcases }) {
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
                    <aside className={(expandedFilter ? "col-span-0 hidden" : "col-span-1") + " space-y-4"}>
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
                    </aside>
                    <ShowcasesItems initialShowcases={initialShowcases} categories={categories} search={search} type={type} expandedFilter={expandedFilter} />
                </div>
            </section>
        </Layout>
    )
}

const getShowcasesData = async () => {
    const { data } = await axios.get("/showcases?page=1")
    return data
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
