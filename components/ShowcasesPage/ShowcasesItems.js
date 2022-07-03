/* eslint-disable @next/next/no-img-element */
import truncate from "../../utils/truncate"
import Link from "next/link"
import { useQuery } from "react-query"
import axios from "../../config"

export default function ShowcasesItems({ categories, search, type, expandedFilter, initialShowcases }) {
    const showcasesQuery = useQuery(["showcases", { categories, search, type }], () => getShowcasesData(categories, search, type), { initialData: initialShowcases })

    const hasFilters = () => {
        return categories.length > 0 || search !== "" || type !== ""
    }

    return (
        <section className={expandedFilter ? "col-span-4" : "col-span-3"}>
            <div className="mb-4" id="search-pills">
                <div className="text-lg text-gray-300" id="pill">
                    {showcasesQuery.isLoading ? (
                        <div className="flex items-center">
                            <div className="h-5 w-5 animate-spin rounded-full border-b-4 border-white ease-in-out"></div>
                            <span className="ml-3">Loading items</span>
                        </div>
                    ) : (
                        <>{hasFilters() && <>{showcasesQuery.data.length} items</>}</>
                    )}
                </div>
            </div>
            <div className={(expandedFilter ? "grid-cols-4" : "grid-cols-3") + " grid gap-6"}>
                {!showcasesQuery.isLoading && (
                    <>
                        {showcasesQuery.data.map((showcase) => (
                            <Link href={`/showcases/${showcase.id}`} className="bg-dark-600 rounded-lg" key={showcase.id}>
                                <a>
                                    <div className="h-[275px]">
                                        <img src={showcase.media} className="h-full w-full rounded-lg" alt={showcase.media} />
                                    </div>
                                    <div className="grid grid-cols-2 items-center justify-between p-4">
                                        <div>
                                            <p className="text-md">{truncate(showcase.title, 16)}</p>
                                            <p className="text-sm">
                                                <span className="text-gray-500">by </span>
                                                <span className="text-blue-400">{showcase.user.name}</span>
                                            </p>
                                        </div>
                                        <div className="bg-dark-800 justify-self-end rounded-md px-3 py-1 text-sm capitalize text-blue-500">{showcase.type}</div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}

const getShowcasesData = async (categories = [], search = "", type = "") => {
    const categoriesString = categories.map((category) => `&categories[]=${category}`).join("&")
    const searchString = search ? `&search=${search}` : ""
    const typeString = type ? `&type=${type}` : ""
    const { data } = await axios.get(`/showcases?page=1${categoriesString}${searchString}${typeString}`)
    return data
}
