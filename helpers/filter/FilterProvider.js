import { useState } from "react"
import FilterContext from "./FilterContext"
import { useRouter } from "next/router"

const FilterProvider = (props) => {
    const router = useRouter()

    // Get all fitler data from query params
    const categories = router.query.categories
    const type = router.query.type
    const search = router.query.search
    let categoryParams = categories ? categories.split(",").map(Number) : []

    // Set the above data to state variable
    const [selectedCategories, setSelectedCategories] = useState(categoryParams ? categoryParams : [])
    const [selectedType, setSelectedType] = useState(type ? type : "")
    const [searchQuery, setSearchQuery] = useState(search ? search : "")

    const handleCategories = (category) => {
        var index = selectedCategories.indexOf(category)

        // If the value is found
        if (index > -1) {
            setSelectedCategories(selectedCategories.filter((e) => e !== category))
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const handleClearAllFilters = () => {
        setSelectedCategories([])
        setSelectedType("")
        setSearchQuery("")
    }

    return (
        <FilterContext.Provider
            value={{
                ...props,
                setSelectedCategories,
                setSelectedType,
                setSearchQuery,
                selectedCategories,
                selectedType,
                searchQuery,
                handleCategories,
                handleClearAllFilters,
            }}
        >
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider
