import { marcas } from "../../data/variables"
import "./ListaProductos.css"
import { useState, useRef, useEffect } from "react"
import { Arrow } from "../Icons"

function Marcas() {
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
        <div className="relative max-w-390 w-[calc(100vw-64px)] mx-auto mb-10">
            <div className="flex overflow-auto scroll-hidden" ref={movimiento}>
                {marcas.map(info => (
                    <a className="w-34 h-16 md:h-28 md:w-52 shrink-0" key={info.id} href={info.url}>
                        <img src={info.img} alt={info.nombre} title={info.nombre} className="w-full h-full object-contain p-5"/>
                    </a>
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

export default Marcas