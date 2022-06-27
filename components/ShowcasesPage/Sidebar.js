import { Disclosure } from "@headlessui/react"
import { defaultTypes } from "../../helpers/defaultData"

export default function Sidebar({ expandedFilter }) {
    return (
        <aside className={expandedFilter ? "col-span-0 hidden" : "col-span-1"}>
            <div className="p-5">
                <Disclosure className="flex items-center justify-between">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between">
                                <h5 className="font-medium">Type</h5>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={(open ? "rotate-180 " : "") + "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
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
                                    <ul className="flex space-x-4">
                                        {defaultTypes.map((type) => (
                                            <li key={type.identifier}>
                                                <button className="rounded-md border-2 border-gray-600 py-2 px-5">{type.label}</button>
                                            </li>
                                        ))}
                                    </ul>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className={(open ? "rotate-180 " : "") + "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
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
        </aside>
    )
}
