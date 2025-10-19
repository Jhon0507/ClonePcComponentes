
function Novedades() {
    return (
        <div className="px-8 pb-4 mx-auto pt-20 tablet:pt-0 max-w-390 tablet:mt-4 laptop:pt-0">
            <h2 className="text-text-font font-open-sans text-sm mb-4"><span className="font-bold">Expertos en tecnología</span> con un servicio 5 estrellas</h2>
            <div className="flex justify-between gap-6 flex-col laptop:flex-row">
                <a href="https://www.pccomponentes.com/ofertas-especiales" title="Ofertas TOP">
                    <img src="https://img.pccomponentes.com/pcblog/1757282400000/500x320-ofertas-top-es.png" alt="ofertas top" className="rounded-2xl w-full"/>
                </a>
                <a href="https://www.pccomponentes.com/iphone-17-series" title="Nuevo iPhone">
                    <img src="https://img.pccomponentes.com/pcblog/1757628000000/apple-iphone-17-pro.png" alt="nuevo iPhone" className="rounded-2xl w-full"/>
                </a>
                <a href="https://www.pccomponentes.com/ofertas-especiales?tag=intel-week" title="Intel">
                    <img src="https://img.pccomponentes.com/pcblog/1757887200000/500x320-intel-week-v3.png" alt="intel" className="rounded-2xl w-full"/>
                </a>
            </div>
        </div>
    )
}

export default Novedades