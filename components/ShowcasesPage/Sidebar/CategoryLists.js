import { Disclosure } from "@headlessui/react"
import { useQuery } from "react-query"
import truncate from "../../../utils/truncate"

export default function CategoryLists({ initialCategories, selected, toggle }) {
    const categoriesQuery = useQuery("categories", () => getCategories(), {
        initialData: initialCategories,
    })

    return (
        <div className="p-5">
            <Disclosure className="flex items-center justify-between">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between">
                            <h5 className="text-lg font-semibold">Category</h5>
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
                            {categoriesQuery.data?.map((category) => (
                                <div key={category.id} className="flex cursor-pointer justify-between" onClick={() => toggle(category.id)}>
                                    <span className="text-gray-300">{truncate(category.name, 31)}</span>
                                    <span className="relative h-6 w-6">
                                        <input
                                            type="checkbox"
                                            className={
                                                (selected.includes(category.id) ? "border-blue-300" : "border-dark-500") + " inline-block h-6 w-6 appearance-none rounded-lg border-2 bg-gray-600"
                                            }
                                        />
                                        {selected.includes(category.id) && (
                                            <i className="absolute inset-0 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </i>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
