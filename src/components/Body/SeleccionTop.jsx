import mejoresProductos from "../../data/mejoresProductos.json"
import { useState } from "react"
import ListaProductos from "./ListaProductos";

function SeleccionTop() {
    const [id, setId] = useState(1);

    return (
        <div
        className="bg-hover-container px-8 py-10 laptop:py-14 "
        >
            <div className="h-140 laptop:h-110 max-w-390 mx-auto flex flex-col laptop:flex-row">
                <div className="w-[calc(100vw-160px)] flex flex-row laptop:flex-col laptop:p-8 mb-4 laptop:mb-0 laptop:mr-6 laptop:min-w-78 box-content">
                    <div className="w-full shrink-0">
                        <img src="https://img.pccomponentes.com/pcblog/1704754800000/312x40-seleccio-n-top.png" alt="icono corazon" className="mb-2 w-78 "/>
                        <p className="text-2xl text-text-font font-open-sans font-bold mb-6">Los mejores productos con precios únicos y entrega rápida. ¡Aprovecha ahora!</p>
                    </div>
                    <a className="text-sm laptop:text-size-17 text-white font-open-sans bg-pccom1 hover:bg-naranja-oscuro transition duration-300 cursor-pointer px-4 py-2 laptop:py-3 rounded h-fit w-fit whitespace-nowrap">Ver más</a>
                </div>
                <div>
                    <div className="flex overflow-x-auto mb-6">
                        {mejoresProductos.mejoresProductos.map(info => (
                            <div
                            key={info.id}
                            className={`flex px-6 text-size-17 text-text-font font-open-sans font-bold whitespace-nowrap h-12 justify-center items-center border-b-6 cursor-pointer ${id === info.id ? "border-text-font" : "border-hover-container"}`}
                            onClick={() => setId(info.id)}
                            >
                                <p>{info.nombre}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {mejoresProductos.mejoresProductos.map(info => (
                            <div
                            key={info.id}
                            >
                                {info.id === id &&
                                    <ListaProductos
                                    lista={info.productos}
                                    carrusel={info.carrusel}
                                    seleccionTop={info.seleccionTOP}
                                    />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeleccionTop