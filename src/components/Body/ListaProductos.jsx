import { StartIcon, Pccomponentes2, HomeIcon, Arrow } from "../Icons"
import "./ListaProductos.css"
import { useState, useEffect, useRef } from "react"

function ListaProductos({lista, carrusel, seleccionTop}) {
    const movimiento = useRef(null)
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const el = movimiento.current;
        if (!el) return;

        const handleScroll = () => setPos(el.scrollLeft);
        el.addEventListener("scroll", handleScroll);

        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLeftClick = () => {
        if (movimiento.current) {
            movimiento.current.scrollBy({ left: -260, behavior: "smooth" })
            // console.log(movimiento.current.scrollLeft)
        }
    }

    const handleRightClick = () => {
        if (movimiento.current) {
            movimiento.current.scrollBy({ left: 260, behavior: "smooth" })
            // console.log(movimiento.current.scrollLeft)
        }
    }

    return (
        <div className={`relative  ${seleccionTop ? "max-w-290 w-[calc(100vw-64px)] laptop:w-[calc(100vw-470px)]" : "max-w-390 w-[calc(100vw-64px)]"}`}>
            <div className={` ${carrusel ? 
            `flex gap-5 overflow-auto scroll-hidden `: 
            "grid grid-cols-1 minimobile:grid-cols-2 mobile:grid-cols-3 lg:grid-cols-4 laptop:grid-cols-5 gap-6"} `}
            ref={movimiento}
            >
                {lista.map(producto => (
                    <div 
                    key={producto.id}
                    className="bg-white rounded-2xl"
                    >
                        <a 
                        href={producto.url} 
                        title={producto.nombre}
                        >
                            <div className={`px-4 pb-4  ${carrusel ? "w-60" : "w-auto"}`}>
                                <div className="py-4 mb-1 flex justify-center relative">
                                    <img src={producto.img} alt={producto.nombre} />
                                    {producto.descuento && (
                                        <div className="absolute font-bold font-open-sans text-white bg-rojo-ofertas text-xs px-1.5 py-1 rounded left-0 top-2">
                                            -{producto.descuento}%
                                        </div>
                                    )}
                                    <div className="absolute flex left-0 bottom-0 gap-1">
                                        {producto.descuentoExtra && (
                                            <div className="bg-white py-1 px-2 rounded text-xs font-open-sans font-bold border-pccom1 text-pccom1 border">
                                                {producto.descuentoExtra}
                                            </div>
                                        )}
                                        {producto.extra && (
                                            <div className={`py-1 px-2 border rounded text-xs font-open-sans font-bold ${
                                                producto.extra.tipo === 1 ? "border-pccom1 text-pccom1": 
                                                producto.extra.tipo === 2 ? "border-pccom1 bg-gradient-to-r from-pccom1 to-pccom2 text-white" :
                                                "text-text-font"
                                                }`}>
                                                {producto.extra.nombre}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-open-sans text-sm text-text-font mb-2">{producto.nombre}</p>
                                    {producto.precioDescuento ? 
                                        (<div className="flex gap-2 font-open-sans mb-2 items-center">
                                            <p className="text-size-17 text-rojo-ofertas font-bold">{producto.precioDescuento}€</p>
                                            <p className="text-sm text-gris-1 line-through">{producto.precioInicial}€</p>
                                        </div>) :
                                        (<div>
                                            <p className="text-size-17 text-text-font font-bold">{producto.precioInicial}€</p>
                                        </div>)
                                    }
                                    <div className="mb-2 flex font-open-sans items-center">
                                        <span className="text-xs font-bold text-text-font">{producto.puntuacion}</span>
                                        <div className="mx-1"><StartIcon/></div>
                                        <span className="text-xs text-text-font">{producto.opiniones} opiniones</span>
                                    </div>
                                    {producto.envio &&
                                        (<div className="flex gap-2 mb-2">
                                            <div className="size-4">{producto.envio[2] ? (<HomeIcon/>): (<Pccomponentes2/>)}</div>
                                            <p className="text-xs font-open-sans font-bold text-verde-1">
                                                {producto.envio[0]}<span className={producto.envio[1] === " Recíbelo mañana" ? "text-verde-1" : "text-text-font"}>{producto.envio[1]}</span>
                                            </p>
                                        </div>)
                                    }
                                    {producto.colores && (
                                        <div className="flex gap-2">
                                            {producto.colores.map((color, index) => (
                                                <div className={`size-3.5 border border-text-font rounded-full ${color}`} key={index}></div>
                                            ))}
                                        </div>
                                    )}
                                    {producto.otros && (
                                        <div className="mb-2">
                                            <p className="text-xs font-open-sans text-gris-1 font-bold">{producto.otros}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            {pos !== 0 && (
                <button 
                className="hidden tablet:block absolute rotate-180 bottom-9/20 px-2.5 py-2.5 border border-gris-claro rounded bg-white hover:bg-hover-container hover:border-hover-container cursor-pointer transition duration-300" 
                onClick={handleLeftClick}>
                    <Arrow/>
                </button>
            )}
            
            <button 
            className="hidden tablet:block absolute bottom-9/20 right-0 px-2.5 py-2.5 border border-gris-claro rounded bg-white hover:bg-hover-container hover:border-hover-container cursor-pointer transition duration-300" 
            onClick={handleRightClick}>
                <Arrow/>
            </button>
        </div>
    )
}

export default ListaProductos