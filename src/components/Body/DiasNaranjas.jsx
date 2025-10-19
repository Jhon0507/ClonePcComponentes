import { diasNaranjas } from "../../data/variables"

function DiasNaranjas() {
    return (
        <div className="bg-pccom1 mx-auto mb-14">
            <div className="bg-pccom1 w-full max-w-390 px-8 pt-8 pb-4 mx-auto">
                <h2 className="text-xl md:text-2xl text-white font-bold font-open-sans mb-6">¡Ey! No te pierdas lo mejor de Días Naranjas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 laptop:grid-cols-6 md:gap-6 gap-3">
                    {diasNaranjas.map(data => (
                        <a href={data.url} key={data.id}>
                            <img src={data.img} alt={data.nombre} title={data.title} className="rounded-2xl"/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default DiasNaranjas