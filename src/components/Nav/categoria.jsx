import { ArrowRight, ComponentesIcon,  OrdenadoresIcon, PerifericosIcon, GamingIcon, SmartphoneIcon, TelevisoresIcon, ElectrodomesticosIcon,
    HogarIcon, SonidoIcon, RelojesIcon, FotografiaIcon, OcioIcon
} from "../Icons"
import { categorias } from "../../data/categorias.json"

function Categoria({clickedId, setClickedId}) {
    const categoriasIcon = [
        {"id": 1, "icon": ComponentesIcon}, {"id": 2, "icon":OrdenadoresIcon}, {"id": 3, "icon":PerifericosIcon}, {"id": 4, "icon":GamingIcon}, {"id": 5, "icon":SmartphoneIcon}, {"id": 6, "icon":TelevisoresIcon},
        {"id": 7, "icon":ElectrodomesticosIcon}, {"id": 8, "icon":HogarIcon}, {"id": 9, "icon":SonidoIcon}, {"id": 10, "icon":RelojesIcon}, {"id": 11, "icon":FotografiaIcon}, {"id": 12, "icon":OcioIcon}
    ]

    return (
        <ul className="mt-5">
            {categorias.map(categoria => (
                <li 
                key={categoria.id}
                className="flex justify-between items-center my-4-5 hover:text-pccom1 cursor-pointer"
                onClick={() => setClickedId(categoria.id)}
                >
                    <div className="flex text-size-17 font-normal items-center font-open-sans">
                        <div className="mx-2">
                            {categoriasIcon.map(icon => (
                                icon.id === categoria.id && <icon.icon key={icon.id} />
                            ))}
                        </div>
                        <p className={clickedId === categoria.id ? "font-bold" : "font-normal"}>
                            {categoria.nombre}
                        </p>
                    </div>
                    <div>
                        <ArrowRight/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Categoria