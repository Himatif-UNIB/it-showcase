import Layout from "../../../sections/Layout"
import { Header } from "../../../components/ShowcasesPage"
import ShowcasesPage from "../../../components/ShowcasesPage/ShowcasesPage"
import axios from "../../../config"

export default function Home({ initialCategories, initialShowcases }) {
    return (
        <Layout>
            <Header />

            <section className="mt-12 px-6">
                <ShowcasesPage initialCategories={initialCategories} initialShowcases={initialShowcases} />
            </section>
        </Layout>
    )
}

const getShowcasesData = async (selectedCategories = "", search = "", type = "", userId) => {
    const categories = selectedCategories.split(",").map(Number)
    const categoriesString = categories.map((category) => `categories[]=${category}`).join("&")
    const searchString = search ? `&search=${search}` : ""
    const typeString = type ? `&type=${type}` : ""
    const { data } = await axios.get(`/showcases?user_id=${userId}&${categoriesString}${searchString}${typeString}`)
    return data
}

export async function getServerSideProps({ query }) {
    const categories = await axios.get("/showcases/categories")
    const initialCategories = categories.data
    const initialShowcases = await getShowcasesData(query.categories, query.search, query.type, query.userId)

    return {
        props: {
            initialCategories,
            initialShowcases,
        },
    }
}
