import { ExitIcon, ArrowRight} from "../Icons"
import Subcategoria from "../Nav/Subcategoria"
import Trending from "../Nav/Trending"
import Categoria from "../Nav/categoria"

import { useState, useEffect } from "react"

function NavIzquierdo({showNavLeft, setShowNavLeft}) {
    const [clickedId, setClickedId] = useState(null)

    useEffect(() => {
        setClickedId(null)
    }, [showNavLeft])
    
    return (
        <div className="font-open-sans">
            <div className={`transform transition-transform duration-300 ${clickedId === null ? "translate-x-0" : "-translate-x-full tablet:translate-0"}`}>
                <div className="py-4 tablet:py-2 px-4 relative bg-white flex justify-end tablet:justify-start ">
                    <button 
                    className=" w-10 h-10 flex justify-center items-center rounded hover:bg-hover-container cursor-pointer"
                    onClick={() => setShowNavLeft(false)}>
                        <ExitIcon/>
                    </button>
                </div>
                <nav className=" h-[calc(100vh-56px)] tablet:pr-10 tablet:pl-14 px-4 pb-8 overflow-y-scroll z-50 relative bg-white">
                    <div className="flex py-2">
                        <a href="https://www.pccomponentes.com/ofertas-especiales" className="flex items-center justify-between w-full">
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pccom1 to-pccom2">Ofertas TOP -40%</p>
                            <div>
                                <ArrowRight/>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4 mb-6 border-t border-gris-claro">
                        <h2 className="font-bold text-xl text-text-font font-open-sans mt-4">Categorías</h2>
                        <Categoria clickedId={clickedId} setClickedId={setClickedId}/>
                    </div>
                    <div className="mt-4 border-t border-gris-claro">
                        <h2 className="font-bold text-xl text-text-font font-open-sans mt-4">Trending</h2>
                        <div className="mt-5">
                            <ul> 
                                <Trending nombre={"Configurador PCs"} link={"https://www.pccomponentes.com/configurador"} extra={"Te recomendamos"}/>
                                <Trending nombre={"Kit Digital"} link={"https://www.pccomponentes.com/servicios-kit-digital"} extra={"Trending"}/>
                                <Trending nombre={"Lanzamientos y novedades"} link={"https://www.pccomponentes.com/novedades"}/>
                                <Trending nombre={"Reacondicionados"} link={"https://www.pccomponentes.com/reacondicionados"}/>
                                <Trending nombre={"Servicios"} link={"https://www.pccomponentes.com/servicios"}/>
                                <Trending nombre={"Empresas y profesionales"} link={"https://www.pccomponentes.com/business"}/>
                                <Trending nombre={"Nuestras tiendas"} link={"https://www.pccomponentes.com/tiendas"}/>
                                <Trending nombre={"Espacio Apple"} link={"https://www.pccomponentes.com/espacio-apple"}/>
                                <Trending nombre={"¡Descuentos vuelta al cole!"} link={"https://www.pccomponentes.com/vuelta-al-cole"}/>
                                <Trending nombre={"Especial Clima"} link={"https://www.pccomponentes.com/ofertas-especiales?tag=ventilacion-y-clima"}/>
                                <Trending nombre={"Ofertas TOP de la semana"} link={"https://www.pccomponentes.com/ofertas-especiales"}/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`h-screen fixed top-0 left-0 w-full tablet:-z-10 tablet:w-subcategoria bg-white transform transition-transform duration-300 ${clickedId === null ? "-translate-x-full" : "translate-x-0 tablet:translate-x-nav-left-x"}`}>
                <Subcategoria id={clickedId} setShowNavLeft={setShowNavLeft} setId={setClickedId}/>
            </div>
        </div>
    )
}

export default NavIzquierdo