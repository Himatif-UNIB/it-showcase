/* eslint-disable @next/next/no-img-element */
import truncate from "../../utils/truncate"
import Link from "next/link"

export default function ShowcasesItems({ filterClicked, showcasesQuery }) {
    return (
        <section className={filterClicked ? "col-span-4" : "col-span-3"}>
            <div className={(filterClicked ? "grid-cols-4" : "grid-cols-3") + " grid"}>
                {showcasesQuery.isLoading && (
                    <div className="flex items-center">
                        <div className="h-5 w-5 animate-spin rounded-full border-b-4 border-white ease-in-out"></div>
                        <span className="ml-3">Loading items</span>
                    </div>
                )}
                {showcasesQuery.data.map((showcase) => (
                    <Link href={`/showcases/${showcase.id}`} className="rounded-lg bg-dark-600" key={showcase.id}>
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
                                <div className="justify-self-end rounded-md bg-dark-800 px-3 py-1 text-sm capitalize text-blue-500">{showcase.type}</div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </section>
    )
}
