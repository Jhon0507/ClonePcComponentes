import { imgsUrls, servicios } from "../../data/variables"
import "./ListaProductos.css"
import { useState, useRef, useEffect } from "react";
import { Arrow } from "../Icons";

function ProductoServicios() {
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
        <div className="px-8 2xl:px-0 mx-auto max-w-390">
            <div className="flex justify-center w-full mb-14">
                <picture className="w-full">
                    <source srcSet="https://img.pccomponentes.com/pcblog/1758060000000/1560x160-logitech.png" media="(min-width: 992px)"/>
                    <img src="https://img.pccomponentes.com/pcblog/1758060000000/480x164-logitech.png" alt="logitech publicidad" className="w-full" />
                </picture>
            </div>
            <div className="mb-14">
                <div className="gap-6 grid grid-cols-2 md:grid-cols-3 laptop:flex">
                    {imgsUrls.map(info => (
                        <a 
                        href={info.url}
                        title={info.titulo}
                        key={info.id}
                        >
                            <img src={info.urlImg} alt={info.titulo} className="rounded-xl"/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="mb-14 relative">
                <div className="flex gap-4 overflow-x-auto scroll-hidden" ref={movimiento}>
                    {servicios.map(info => (
                        <a
                            key={info.id}
                            title={info.tituloHover}
                            href={info.url}
                            className="block text-center w-34 md:w-52 shrink-0"
                            >
                            <img src={info.urlImg} alt={info.titulo} className="w-full"/>
                            <p className="text-text-font font-open-sans text-sm">{info.titulo}</p>
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
        </div>
    )
}

export default ProductoServicios