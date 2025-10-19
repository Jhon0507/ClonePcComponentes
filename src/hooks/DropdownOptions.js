import { useState, useEffect, useRef } from "react"

export function useDropdownOptions () {
    const [searchOptions, setSearchOptions] = useState("Todo el catálogo")
    const [openSearchOptions, setOpenSearchOptions] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenSearchOptions(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return { searchOptions, setSearchOptions,
            openSearchOptions, setOpenSearchOptions,
            dropdownRef
    }
}