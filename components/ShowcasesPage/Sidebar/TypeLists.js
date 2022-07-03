import { defaultTypes } from "../../../helpers/defaultData"
import Collapse from "../../ui/Collapse"

export default function TypeLists({ selected, toggle }) {
    return (
        <Collapse label="Type">
            <div className="shadow-large w-full rounded-lg bg-light-dark px-5 py-4 text-sm">
                <ul className="flex space-x-4">
                    {defaultTypes.map((type) => (
                        <li key={type.name}>
                            <button
                                className={(selected === type.name ? "border-blue-600 bg-blue-500 text-white" : "border-gray-600 text-gray-300") + " rounded-md border-2 py-2 px-5"}
                                onClick={() => toggle(type.name)}
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
