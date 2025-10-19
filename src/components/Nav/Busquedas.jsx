import { useState } from "react"

function Busquedas({allSearchs}) {
    const [historialBorrado, setHistorialBorrado] = useState(false)

    const handleClick = () => {
        localStorage.removeItem("busquedas")

        if (localStorage.getItem("busquedas") === null) {
            setHistorialBorrado(true)
        }
    }
    return (
        <div className={`px-4 ${!historialBorrado && allSearchs.length > 0 ? "block" : "hidden"}`}>
            <div className="flex justify-between">
                <h2 className="font-bold text-text-font uppercase py-2.5 text-sm font-open-sans">búsquedas recientes</h2>
                <button className="text-sm font-open-sans text-text-font cursor-pointer hover:underline" onClick={handleClick}>Borrar historial</button>
            </div>
            <ul>
                {allSearchs.map((name, index) => (
                    <li
                    key={index}
                    className="px-4 py-2.5 hover:bg-hover-container text-sm text-text-font"
                    >
                        <a href={`https://www.pccomponentes.com/search/?query=${name}&page=1&or-relevance`}>
                        {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Busquedas