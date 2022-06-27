/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Layout from "../sections/Layout"

import Header from "../components/ShowcasesPage/Header"
import Searchbar from "../components/ShowcasesPage/Searchbar"
import Sidebar from "../components/ShowcasesPage/Sidebar"
import ShowcasesItems from "../components/ShowcasesPage/ShowcasesItems"

export default function Home() {
    const [expandedFilter, setExpandedFilter] = useState(false)

    // All filters data state
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [searc, setSearch] = useState("")

    const toggleExpandedFilter = () => {
        setExpandedFilter(!expandedFilter)
    }

    return (
        <Layout>
            <Header />

            <section className="mt-12">
                <Searchbar toggleExpandedFilter={toggleExpandedFilter} />
                <div className="mt-5 grid grid-cols-4 gap-6">
                    <Sidebar expandedFilter={expandedFilter} />
                    <ShowcasesItems expandedFilter={expandedFilter} />
                </div>
            </section>
        </Layout>
    )
}
