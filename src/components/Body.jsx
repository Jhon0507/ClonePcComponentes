import Novedades from "./Body/Novedades"
import Productos from "./Body/Productos"
import ProductoServicios from "./Body/ProductoServicios"
import SeleccionTop from "./Body/SeleccionTop"
import DiasNaranjas from "./Body/DiasNaranjas"
import Marcas from "./Body/Marcas"

import ofertasTop from "../data/ofertasTop.json"
import ofertasIntelWeek from "../data/ofertasIntelWeek.json"
import basadoEnTuNavegacion from "../data/basadoEnTuNavegacion.json"
import productosMasvendidos from "../data/productosMasVendidos.json"

function Body() {
    return (
        <>  
            <Novedades/>
            <Productos 
            titulo="¡Consigue las ofertas más TOP del momento!"
            url="https://www.pccomponentes.com/ofertas-especiales?sort=relevance"
            lista={ofertasTop.productos}
            carrusel={ofertasTop.carrusel}
            />
            <Productos
            titulo="Ofertas de la Intel Week"
            url="https://www.pccomponentes.com/ofertas-intel-week?sort=relevance"
            lista={ofertasIntelWeek.productos}
            carrusel={ofertasIntelWeek.carrusel}
            />
            <ProductoServicios/>
            <SeleccionTop/>
            <Productos
            titulo="Productos basados en tu navegación"
            url="https://www.pccomponentes.com/nuestras-recomendaciones-para-ti"
            lista={basadoEnTuNavegacion.productos}
            carrusel={basadoEnTuNavegacion.carrusel}
            />
            <Productos
            titulo="Productos más vendidos"
            url="https://www.pccomponentes.com/dias-naranjas"
            lista={productosMasvendidos.productos}
            carrusel={productosMasvendidos.carrusel}
            />
            <DiasNaranjas/>
            <Marcas/>
            
        </>
    )
}

export default Body