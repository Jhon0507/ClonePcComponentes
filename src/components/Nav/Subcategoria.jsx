import { categorias } from "../../data/categorias.json"
import { ArrowRight, ExitIcon } from "../Icons"
import { useState } from "react"

function Subcategoria({id, setId, setShowNavLeft}) {
    const [idSubcategoria, setIdSubcategoria] = useState(null)
    const [open, setOpen] = useState(false)

    const categoria = categorias.find(categoria => categoria.id === id)
    const nombreCategoria = id ? categoria.nombre : null
    const linkCategoria = id ? categoria.link : null
    const subcategorias = id ? categoria.subcategoria : null

    const handleClick = e => {
        setOpen(!open)
        setIdSubcategoria(+e.currentTarget.id)
    }

    return (
    <div className="px-0 tablet:px-10 tablet:py-14">
        <div className="flex tablet:hidden w-full justify-between px-4 py-4">
            <div className="rotate-180">
                <button onClick={() => setId(null)} className="size-10 flex justify-center items-center hover:bg-hover-container rounded cursor-pointer">
                    <ArrowRight/>
                </button>
                
            </div>
            <div>
                <button onClick={() => setShowNavLeft(false)} className="size-10 flex justify-center items-center hover:bg-hover-container rounded cursor-pointer">
                    <ExitIcon/>
                </button>
            </div>
        </div>
        <div className="px-4 tablet:py-3 flex flex-col gap-2 ">
            <h2 className="text-2xl text-text-font font-bold">{nombreCategoria}</h2>
            {id !== 12 ? <a href={linkCategoria} className="text-text-font text-sm">Todo en {nombreCategoria}</a> : null}
        </div>
        <nav className="h-[calc(100vh-150px)] w-full tablet:w-90 overflow-y-auto">
            {subcategorias ? 
            <ul>
                {subcategorias.map((subcategoria, index) => (
                    <li
                    key={index}
                    className="text-text-font text-size-17"
                    onClick={handleClick}
                    id={index}
                    >
                        {subcategoria.opciones ? 
                            (<div className={`transition-all duration-300 ease-in-out overflow-hidden ${idSubcategoria === index && open ? "max-h-125" : "max-h-13"}`}>
                                <div className="w-full flex justify-between items-center  px-4 py-3 transition-colors duration-300 cursor-pointer hover:bg-hover-container">
                                    <p className="font-bold">
                                        {subcategoria.nombre}
                                    </p>
                                    <div className={`transition-transform duration-500 ${idSubcategoria === index && open ? "rotate-270" : "rotate-90"}`}>
                                        <ArrowRight/>
                                    </div>
                                </div>
                                <div className="pl-4 py-3">
                                    <ul>
                                        {subcategoria.opciones.map((opcion, index) => (
                                            <li
                                            key={index}
                                            className="text-sm hover:text-pccom1 py-2"
                                            >
                                                <a href={opcion.link}>
                                                    {opcion.nombre}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            ) :
                            (<div>
                                <p className="font-bold  px-4 py-3 transition-colors duration-300 cursor-pointer hover:bg-hover-container">
                                    <a href={subcategoria.link}>{subcategoria.nombre}</a>
                                </p>
                            </div>)
                        }
                    </li>
                ))}
            </ul> :
            null
            }
        </nav>
    </div>
    )
}

export default Subcategoria