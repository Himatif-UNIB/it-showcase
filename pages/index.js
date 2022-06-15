/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Layout from "../sections/Layout"
import { useQuery } from "react-query"
import axios from "../config"

import Header from "../components/ShowcasesPage/Header"
import Searchbar from "../components/ShowcasesPage/Searchbar"
import Sidebar from "../components/ShowcasesPage/Sidebar"
import ShowcasesItems from "../components/ShowcasesPage/ShowcasesItems"

export default function Home({ showcases }) {
    const showcasesQuery = useQuery(["showcases"], () => getShowcasesData(), {
        initialData: showcases,
    })

    const [filterClicked, setFilterClicked] = useState(false)

    const [filters, setFilters] = useState({
        category_id: "",
        technologies: "",
        type: "",
    })

    const toggleFilter = () => {
        setFilterClicked(!filterClicked)
    }

    return (
        <Layout>
            <Header />

            <section className="mt-12">
                <Searchbar toggleFilter={toggleFilter} />
                <div className="mt-5 grid grid-cols-4 gap-6">
                    <Sidebar filterClicked={filterClicked} />
                    <ShowcasesItems filterClicked={filterClicked} showcasesQuery={showcasesQuery} />
                </div>
            </section>
        </Layout>
    )
}

const getShowcasesData = async (page = 1) => {
    const { data } = await axios.get(`showcases?page=${page}`)
    return data
}

export async function getServerSideProps() {
    const showcases = await getShowcasesData()

    return {
        props: {
            showcases,
        },
    }
}
