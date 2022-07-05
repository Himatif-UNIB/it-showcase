import { useContext } from "react"
import { useQuery } from "react-query"
import truncate from "../../../utils/truncate"
import Collapse from "../../ui/Collapse"
import FilterContext from "../../../helpers/filter/FilterContext"

export default function CategoryLists({ initialCategories }) {
    const context = useContext(FilterContext)

    const categoriesQuery = useQuery("categories", () => getCategories(), {
        initialData: initialCategories,
    })

    return (
        <Collapse label="Category">
            <div className="w-full space-y-3 rounded-lg bg-light-dark px-5 py-4 text-sm shadow-large">
                {categoriesQuery.data?.map((category) => (
                    <div key={category.id} className="flex cursor-pointer justify-between" onClick={() => context.handleCategories(category.id)}>
                        <span className="text-gray-300">{truncate(category.name, 31)}</span>
                        <span className="relative h-6 w-6">
                            <input
                                type="checkbox"
                                className={
                                    (context.selectedCategories.includes(category.id) ? "border-blue-300" : "border-gray-500") +
                                    " inline-block h-6 w-6 appearance-none rounded-lg border-2 bg-light-dark"
                                }
                            />
                            {context.selectedCategories.includes(category.id) && (
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
            </div>
        </Collapse>
    )
}
