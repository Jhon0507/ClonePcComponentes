import footerInfo from "../../data/footerInfo.json"
import { Pccomponentes3, InstagramIcon, TwitterIcon, FacebookIcon, TelegramIcon, YoutubeIcon, TikTokIcon, TwitchIcon } from "../Icons"
import MetodosPagos from "./MetodosPagos"

function FooterFinal() {
    return (
        <div className="w-full border-y border-gris-claro ">
            <div className="px-8 flex mx-auto max-w-390 pt-14 pb-10">
                <div className="grid grid-cols-5 gap-3">
                    {footerInfo.info.map(section => (
                        <div
                        key={section.id}
                        className="text-text-font text-sm font-open-sans"
                        >
                            <h2 className="font-bold py-2 pl-4 pr-10">{section.nombre}</h2>
                            <ul>
                                {section.datos.map(data => (
                                    <li
                                    key={data.id}
                                    className="py-2.5 pl-4 rounded hover:bg-hover-container"
                                    >
                                        <a href={data.url}>{data.nombre}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-text-font text-sm font-open-sans">
                        <h2 className="font-bold py-2 pl-4 pr-10">Comunidad</h2>
                        <ul>
                            <li className="py-2.5 pl-4 rounded hover:bg-hover-container">
                                <a href="https://www.pccomponentes.com/blog" className="flex gap-1">
                                    <div className="size-5"><Pccomponentes3/></div>
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li className="py-2.5 pl-4 rounded hover:bg-hover-container">
                                <a href="https://www.instagram.com/pccomponentes/" className="flex gap-1">
                                    <div className="size-5"><InstagramIcon/></div>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
                                <a href="https://twitter.com/pccomponentes" className="flex gap-1">
                                    <div className="size-5"><TwitterIcon/></div>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
                                <a href="https://www.facebook.com/pccomponentes" className="flex gap-1">
                                    <div className="size-5"><FacebookIcon/></div>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
                                <a href="https://t.me/pccomponentesESP" className="flex gap-1">
                                    <div className="size-5"><TelegramIcon/></div>
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
                                <a href="https://www.youtube.com/user/PcComponentescom" className="flex gap-1">
                                    <div className="size-5"><YoutubeIcon/></div>
                                    <span>Youtube</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
                                <a href="https://www.tiktok.com/@pccomponentes.com" className="flex gap-1">
                                    <div className="size-5"><TikTokIcon/></div>
                                    <span>TikTok</span>
                                </a>
                            </li>
                            <li className=" py-2.5 pl-4 rounded hover:bg-hover-container ">
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

export default FooterFinal