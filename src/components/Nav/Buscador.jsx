import { Search, Triangle, ArrowToLeft, Microphone } from "../Icons"
import Busquedas from "./Busquedas"
import { useDropdownOptions } from "../../hooks/DropdownOptions"
import { useState, useEffect } from "react"
import { loMasBuscado } from "../../data/variables"

function Buscador() {
    const {openSearchOptions, setOpenSearchOptions, searchOptions, setSearchOptions, dropdownRef} = useDropdownOptions()
    const [inputClick, setInputClick] = useState(false)
    const [allSearchs, setAllSearchs] = useState(JSON.parse(localStorage.getItem("busquedas")) || [])
    const [mobileSize, setMobileSize] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setMobileSize(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []) 

    useEffect(() => {
        localStorage.setItem("busquedas", JSON.stringify(allSearchs))
    }, [allSearchs])

    const handleSubmit = e => {
        e.preventDefault()
        const {search} = Object.fromEntries(new window.FormData(e.target))
        setAllSearchs(prev => {
            if (prev.includes(search)) return prev
            return [...allSearchs, search]
        })
        window.location.href = `https://www.pccomponentes.com/search/?query=${search}&page=1&or-relevance`
    }

    return (
        <div className="relative w-full tablet:w-auto overflow-visible 2xl:max-w-2xl 2xl:w-4/5">
            <div className={`${inputClick ? "mt-5" : "-mt-1"} tablet:mt-0 px-2 tablet:px-4 py-2 tablet:py-4 w-full h-full z-50 bg-white rounded-t`}>
                <div className="flex items-center justify-center h-11 tablet:h-12 w-full tablet:w-full 2xl:max-w-2xl 2xl:w-full">
                    <div 
                    className="text-sm hidden tablet:flex justify-between items-center w-52 border border-r-0 border-white-gray h-full rounded-tl-sm rounded-bl-sm px-4 cursor-pointer relative"
                    onClick={() => setOpenSearchOptions(!openSearchOptions)}
                    ref={dropdownRef}
                    >
                        <p className="text-text-font w-11/12 pr-2 whitespace-nowrap overflow-hidden text-ellipsis">{searchOptions}</p>
                        <div className={`transition-transform duration-500 ${openSearchOptions ? "rotate-180" : "rotate-0"}`}>
                            <Triangle/>
                        </div>
                        <div className={`font-open-sans top-full left-0 w-full shadow-lg/30 rounded-md text-text-font ${openSearchOptions ? "absolute" : "hidden"}`}>
                            <ul>
                                <li className={`py-3.5 px-4 hover:bg-hover-container ${searchOptions === "Todo el catálogo" ? "bg-hover-container" : "bg-white"}`} onClick={e => setSearchOptions(e.target.textContent)}>Todo el catálogo</li>
                                <li className={`py-3.5 px-4 hover:bg-hover-container ${searchOptions === "Reacondicionados" ? "bg-hover-container" : "bg-white"}`} onClick={e => setSearchOptions(e.target.textContent)}>Reacondicionados</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full rounded tablet:rounded-tl-none tablet:rounded-bl-none rounded-tr-sm rounded-br-sm border w-full tablet:w-full border-white-gray has-[input:hover]:border-black">
                        <form className="flex items-center justify-between h-full px-4 w-full" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Buscar" name="search" className="h-full text-base outline-0 border-0 w-4/5" onFocus={() => setInputClick(!inputClick)}/>
                            <button type="submit" className="cursor-pointer hover:scale-110 transition"><Search/></button>
                        </form>
                    </div>
                </div>
                <div className={`pt-3 bg-white w-full rounded-b  left-0 ${inputClick ? "absolute":"hidden"}`}>
                    <Busquedas allSearchs={allSearchs}/>
                    <div className="px-4 pb-4">
                        <h2 className="font-bold text-text-font uppercase py-2.5 text-sm font-open-sans">Lo más buscado</h2>
                        <div>
                            <ul className="flex flex-wrap gap-4">
                                {loMasBuscado.map((nombre, index) => (
                                    <li
                                    key={index}
                                    className="py-1 px-2 bg-hover-container rounded text-xs text-text-font"
                                    >{nombre}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {inputClick && mobileSize && (
                <div className="fixed inset-0 bg-white">
                    <div className="flex items-center px-2 py-2 w-full">
                        <div onClick={() => setInputClick(!inputClick)} className="px-2 py-2">
                            <ArrowToLeft/>
                        </div>
                        <div className="border w-full border-white-gray rounded has-[input:hover]:border-black">
                            <form className="flex items-center justify-between w-full">
                                <div>
                                    <input type="text" placeholder="Buscar" className="outline-0 h-12 border-0 pl-4"/>
                                </div>
                                <div className="mr-4">
                                    <Microphone/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ml-4">
                        <h2 className="uppercase font-bold text-text-font text-sm py-2.5 px-4">Lo más buscado</h2>
                        <div className="px-4 border-b pb-8 border-gris-claro">
                            <ul className="flex flex-wrap gap-4">
                                {loMasBuscado.map((nombre, index) => (
                                    <li
                                    key={index}
                                    className="py-1 px-2 bg-hover-container rounded text-xs text-text-font"
                                    >{nombre}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {inputClick && (
                <div 
                className="fixed inset-0 bg-black opacity-10 -z-20"
                onClick={() => setInputClick(false)}
                ></div>
            )}
        </div>
    )
}

export default Buscador