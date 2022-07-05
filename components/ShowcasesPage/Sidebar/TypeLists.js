import { useContext } from "react"
import { defaultTypes } from "../../../helpers/defaultData"
import FilterContext from "../../../helpers/filter/FilterContext"
import Collapse from "../../ui/Collapse"

export default function TypeLists() {
    const context = useContext(FilterContext)

    return (
        <Collapse label="Type">
            <div className="w-full rounded-lg bg-light-dark px-5 py-4 text-sm shadow-large">
                <ul className="flex space-x-4">
                    {defaultTypes.map((type) => (
                        <li key={type.name}>
                            <button
                                className={(context.selectedType === type.name ? "border-blue-600 bg-blue-500 text-white" : "border-gray-600 text-gray-300") + " rounded-md border-2 py-2 px-5"}
                                onClick={() => context.setSelectedType(type.name)}
                            >
                                {type.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Collapse>
    )
}
