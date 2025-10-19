import { ExitIcon } from "../Icons"

function Cesta({setCard}) {
    return (
        <>
            <div className="w-full p-6 flex justify-between items-center">
                <h2 className="text-size-17 font-bold font-open-sans text-text-font">Mi cesta</h2>
                <div 
                className="px-4 py-2 hover:bg-hover-container"
                onClick={() => setCard(false)}
                >
                    <ExitIcon/>
                </div>
            </div>
            <div className="px-6">
                <div className="p-6 font-open-sans flex flex-col">    
                    <div className="flex justify-center">
                        <img src="https://cdn.pccomponentes.com/Unilae/svg/lensPickingPointsNoPostalCodeFound.svg" alt="icono de lupa" />
                    </div>
                    <h2 className="mt-4 text-size-17 font-bold text-center">Tu carrito está vacío</h2>
                    <p className="mt-2 mb-4 text-size-17 text-gray-500 text-center">Explora multitud de artículos a buen precio desde nuestra página principal</p>
                    <a href="" className="w-full px-4 py-3 bg-pccom1 text-white text-center text-size-17 rounded transition duration-300 hover:bg-naranja-oscuro">Explorar artículos</a>
                </div>
            </div>
        </>
    )
}

export default Cesta