import React from "react"
import Layout from "../../sections/Layout"
import { useQuery } from "react-query"
import axios from "../../config"
import { useRouter } from "next/router"
import Header from "../../components/ShowcasesDetailPage/Header"
import Body from "../../components/ShowcasesDetailPage/Body"

export default function ShowcaseDetail() {
    const { query } = useRouter()
    const showcaseId = query.id
    const { data, isError, isLoading, isSuccess } = useQuery(["showcase", showcaseId], () => getShowcase(showcaseId))

    return (
        <Layout>
            {isError && <p>There was an error processing your request</p>}
            {isLoading && <p>Loading....</p>}{" "}
            {isSuccess && (
                <article className="flex items-center justify-center">
                    <div className="w-3/4">
                        <Header data={data} />
                        <Body data={data} />
                    </div>
                </article>
            )}
        </Layout>
    )
}

const getShowcase = async (id) => {
    const { data } = await axios.get(`/showcases/${id}`)
    return data
}
