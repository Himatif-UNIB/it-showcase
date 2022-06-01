/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Layout from "../sections/Layout"
import { getShowcases } from "../api/ShowcasesAPI"
import truncate from "../utils/truncate"
import Link from "next/link"
import { Disclosure } from "@headlessui/react"

export default function Home() {
    const [filterClicked, setFilterClicked] = useState(false)

    const [showcases, setShowcases] = useState([])
    const [filters, setFilters] = useState({
        category_id: "",
        technologies: "",
        type: "",
    })

    const toggleFilter = () => {
        setFilterClicked(!filterClicked)
    }

    useEffect(() => {
        ;(async () => {
            const arr = []

            if (filters.category_id) {
                arr.push(`category_id=${filters.category_id}`)
            }

            const response = await getShowcases(`showcases?${arr.join("&")}`)
            const data = response.data
            console.log(data)
            setShowcases(data)
        })()
    }, [])

    return (
        <Layout>
            <h1 className="bg-gradient-to-r from-[#D74AC4] to-[#EA7963] bg-clip-text text-center font-outfit text-7xl font-bold text-transparent">Himatif Showcase</h1>
            <h3 className="mt-8 text-center text-lg font-medium tracking-wider text-gray-200">Web &middot; Apps &middot; Machine Learning &middot; Multimedia</h3>
            <section className="mt-12">
                <div className="flex items-center">
                    <button className="rounded-full p-2 transition-all duration-200 ease-in hover:bg-dark-500" onClick={() => toggleFilter()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                        </svg>
                    </button>
                    <div className="relative ml-6 w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            className="revue-form-field block w-full rounded-lg bg-dark-800 px-2.5 py-3 pl-10 text-sm text-white placeholder-gray-500 transition-all duration-200 ease-in-out hover:bg-dark-500 focus:outline-none"
                            placeholder="Search..."
                            type="text"
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-6">
                    <div className={filterClicked ? "col-span-0 hidden" : "col-span-1"}>
                        <div className="p-5">
                            <Disclosure className="flex items-center justify-between">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between">
                                            <h5 className="font-medium">Type</h5>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={open ? "rotate-180 " : "" + "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="mt-4">
                                            <div>
                                                <div className="flex space-x-4">
                                                    <button className="rounded-md border-2 border-gray-600 py-2 px-5">App</button>
                                                    <button className="rounded-md border-2 border-gray-600 py-2 px-5">Multimedia</button>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                        <div className="p-5">
                            <Disclosure className="flex items-center justify-between">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between">
                                            <h5 className="font-medium">Category</h5>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={open ? "rotate-180 " : "" + "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="mt-4 space-y-3">
                                            <div className="flex justify-between">
                                                <p>Sistem Informasi</p>
                                                <span className="relative h-6 w-6">
                                                    <input type="checkbox" className="h-6 w-6 appearance-none rounded-lg border-2 border-blue-300 bg-gray-600" />
                                                    <i className="absolute inset-0 flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <p>Apps</p>
                                                <span className="relative h-6 w-6">
                                                    <input type="checkbox" className="h-6 w-6 appearance-none rounded-lg border-2 border-dark-500 bg-gray-600" />
                                                </span>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                    <div className={filterClicked ? "col-span-4" : "col-span-3"}>
                        <div className={(filterClicked ? "grid-cols-4" : "grid-cols-3") + " grid"}>
                            {showcases.map((showcase) => (
                                <Link href={`/showcases/${showcase.id}`} className="rounded-lg bg-dark-600" key={showcase.id}>
                                    <a>
                                        <img src="https://images.ui8.net/uploads/preview-1_1653889071277.png" className="rounded-lg" alt="" />
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
                    </div>
                </div>
            </section>
        </Layout>
    )
}
