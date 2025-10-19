import { ArrowToLeft } from "../Icons"
import ListaProductos from "./ListaProductos"

function Productos({titulo, url, lista, carrusel, seleccionTop}) {

    return (
        <div className="max-w-390 mx-auto">
            <a href={url}>
                <div className="flex justify-between p-8 mb-6">
                    <h1
                    className="font-open-sans text-text-font text-2xl font-bold"
                    >{titulo}</h1>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="hidden md:block font-open-sans text-text-font text-sm hover:text-naranja-oscuro">Ver más</p>
                        <div className="rotate-180 ">   
                            <ArrowToLeft/>
                        </div>
                    </div>
                </div>
            </a>
            <div className="px-8 mb-5 ">
                <ListaProductos 
                lista={lista}
                carrusel={carrusel}
                SeleccionTop={seleccionTop}
                />
            </div>
        </div>
    )
}

export default Productos