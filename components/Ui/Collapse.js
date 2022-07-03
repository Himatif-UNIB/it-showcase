import { useEffect, useState } from "react"
import useMeasure from "react-use-measure"
import Plus from "../Icons/Plus"

export default function Collapse({ label, children, initialOpen = false }) {
    let [isOpen, setIsOpen] = useState(false)
    let [ref, { height }] = useMeasure()

    useEffect(() => {
        initialOpen && setIsOpen(true)
    }, [initialOpen])

    return (
        <div
            className={`ease-[cubic-bezier(0.33, 1, 0.68, 1)] shadow-card hover:shadow-transaction relative mb-5 overflow-hidden rounded-lg bg-light-dark transition-all duration-[350ms] last:mb-0 ${
                isOpen ? "shadow-transaction" : "shadow-card"
            }`}
            style={{ height: isOpen ? 54 + height : 54 }}
        >
            <button className="h-13 flex w-full items-center justify-between px-5 py-4 font-medium tracking-wider text-white" onClick={() => setIsOpen(!isOpen)}>
                {label}

                <span className={`shrink-0 transition-transform duration-200 ltr:ml-4 rtl:mr-4 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="" />
                </span>
            </button>

            <div className={`border-t border-dashed ${isOpen ? "border-gray-700" : "border-transparent"}`} ref={ref}>
                {children}
            </div>
        </div>
    )
}
