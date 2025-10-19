import MetodosPagos from "./MetodosPagos"
import footerInfo from "../../data/footerInfo.json"
import { ArrowRight, Pccomponentes3, InstagramIcon, TwitterIcon, FacebookIcon, TelegramIcon, YoutubeIcon, TikTokIcon, TwitchIcon } from "../Icons"
import { useState } from "react"

function FooterFinalMobile() {
    const [idsActuales, setIdsActuales] = useState([])
    const handleClick = e => {
        const nuevoId = +e.currentTarget.id
        setIdsActuales(prev => {
            const existe = prev.includes(nuevoId)
            if (existe) return prev.filter(id => id !== nuevoId)
            return [ ...prev, nuevoId,]
        })
    }

    return (
        <div className="w-full border-y border-gris-claro">
            <div className="p-8">
                <div className="flex flex-col">
                    {footerInfo.info.map(section => (
                        <div
                        key={section.id}
                        className={`border-b border-gris-claro overflow-hidden transition-all duration-500 ease-in-out ${idsActuales.includes(section.id) ? "max-h-150" : "max-h-10"}`}
                        onClick={handleClick}
                        id={section.id}
                        >
                            <div className="flex items-center justify-between pt-2 pb-3 pl-4 hover:bg-hover-container" >
                                <h2 className="text-text-font text-sm font-bold font-open-sans">{section.nombre}</h2>
                                <div className={`transition-transform duration-500 mr-2 ${idsActuales.includes(section.id) ? "rotate-270" : "rotate-90"}`}><ArrowRight/></div>
                            </div>
                            <ul className="pb-2 px-4">
                                {section.datos.map(data => (
                                    <li
                                    key={data.id}
                                    className="py-2 text-text-font text-sm font-open-sans"
                                    >
                                        <a href={data.url}>{data.nombre}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className={`border-b border-gris-claro overflow-hidden transition-all duration-500 ease-in-out ${idsActuales.includes(7) ? "max-h-150" : "max-h-10"}`} onClick={handleClick} id={7}>
                        <div className="flex items-center justify-between pt-2 pb-3 pl-4 hover:bg-hover-container" >
                            <h2 className="text-text-font text-sm font-bold font-open-sans">Comunidad</h2>
                            <div className={`transition-transform duration-500 mr-2 ${idsActuales.includes(7) ? "rotate-270" : "rotate-90"}`}><ArrowRight/></div>
                        </div>
                        <ul className=" pb-2 px-4">
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.pccomponentes.com/blog" className="flex gap-1">
                                    <div className="size-5"><Pccomponentes3/></div>
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.instagram.com/pccomponentes/" className="flex gap-1">
                                    <div className="size-5"><InstagramIcon/></div>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://twitter.com/pccomponentes" className="flex gap-1">
                                    <div className="size-5"><TwitterIcon/></div>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.facebook.com/pccomponentes" className="flex gap-1">
                                    <div className="size-5"><FacebookIcon/></div>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://t.me/pccomponentesESP" className="flex gap-1">
                                    <div className="size-5"><TelegramIcon/></div>
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.youtube.com/user/PcComponentescom" className="flex gap-1">
                                    <div className="size-5"><YoutubeIcon/></div>
                                    <span>Youtube</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.tiktok.com/@pccomponentes.com" className="flex gap-1">
                                    <div className="size-5"><TikTokIcon/></div>
                                    <span>TikTok</span>
                                </a>
                            </li>
                            <li className="py-2 text-text-font text-sm font-open-sans">
                                <a href="https://www.twitch.tv/pccomponenteses" className="flex gap-1">
                                    <div className="size-5"><TwitchIcon/></div>
                                    <span>Twitch</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <MetodosPagos/>
            </div>
        </div>
    )
}

export default FooterFinalMobile