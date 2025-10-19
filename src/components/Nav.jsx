import { useOpenLeftNav } from "../hooks/OpenLeftNav"
import { Bar, User, Card, Pccomponentes } from "./Icons"
import NavIzquierdo from "./Nav/NavIzquierdo"
import Buscador from "./Nav/Buscador"
import ChatIA from "./Nav/ChatAI"
import Cesta from "./Nav/Cesta"

export default function Nav() {
    const { 
        showNavLeft, setShowNavLeft, 
        iaChat, setIaChat,
        card, setCard
    } = useOpenLeftNav()

    const handleClick = () => {
        setShowNavLeft(false)
        setIaChat(false)
        setCard(false)
    }

    return (
        <>
            <nav className="font-open-sans w-full">
                <div className="bg-white fixed z-40 flex justify-center items-start tablet:items-center pt-1 tablet:pt-0 px-4 tablet:px-0 gap-5  w-full border-b border-gris-claro">
                    <div className="hidden tablet:block">
                        <a href="https://www.pccomponentes.com" title="PcComponentes">
                            <img src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg" alt="icon of PcComponentes" className="w-36"/>
                        </a>
                    </div>
                    <div className="flex items-center h-12 w-12 tablet:w-auto px-3 hover:bg-hover-container cursor-pointer rounded">
                        <button className="flex items-center justify-center cursor-pointer" onClick={() => setShowNavLeft(true)}>
                            <Bar/>
                            <p className="hidden ml-2 text-base text-text-font laptop:block whitespace-nowrap">Todas las categorías</p>
                        </button>
                    </div>
                    <div className="flex justify-center items-center tablet:hidden h-12 w-12 tablet:w-auto hover:bg-hover-container cursor-pointer rounded">
                        <div className="size-6">
                            <Pccomponentes/>
                        </div>
                    </div>
                    <Buscador/>
                    <div 
                    className="justify-center items-center h-12 border border-white-gray px-4 rounded hover:bg-hover-container hover:border-hover-container hidden desktop:flex"
                    onClick={() => setIaChat(true)}
                    >
                        <img src="https://cdn.pccomponentes.com/img/asistente/stars.png" alt="icon star" className="size-6"/>
                        <p className="pl-2 text-text-font whitespace-nowrap">Buscar con IA</p>
                    </div>
                    <div title="Mi cuenta Pccomponentes">
                        <a href="https://www.pccomponentes.com/login" className="flex items-center justify-center h-12 w-12 tablet:w-auto cursor-pointer gap-2 px-2 rounded hover:bg-hover-container">
                            <User/>
                            <p className="hidden tablet:block whitespace-nowrap">Mi cuenta</p>
                        </a>
                    </div>
                    <div 
                    className="flex items-center justify-center h-12 w-12 tablet:w-auto cursor-pointer gap-2 px-2 rounded hover:bg-hover-container" title="Mi cesta Pccomponentes"
                    onClick={() => setCard(true)}
                    >
                        <Card/>
                        <p className="hidden tablet:block whitespace-nowrap">Mi cesta</p>
                    </div>
                </div>
            </nav>
            {(showNavLeft || iaChat || card) && (
                <div 
                className="fixed inset-0 bg-black opacity-10 z-50"
                onClick={handleClick}
                ></div>
            )}
            <aside className={`h-screen fixed top-0 left-0 w-full tablet:w-nav-left-x bg-white z-60 transform transition-transform duration-300 ${showNavLeft ? "translate-x-0" : "-translate-x-full"}`}>
                <NavIzquierdo showNavLeft={showNavLeft} setShowNavLeft={setShowNavLeft}/>
            </aside>
            <aside className={`h-screen fixed top-0 left-0 w-full md:w-160 bg-white z-60 transform transition-transform duration-300 ${iaChat ? "md:translate-x-[calc(100vw-640px)]" : "translate-x-[100vw] "}`}>
                <ChatIA iaChat={iaChat} setIaChat={setIaChat}/>
            </aside>
            <aside className={`h-screen fixed top-0 left-0 w-full md:w-nav-left-x bg-white z-60 transform transition-transform duration-300 ${card ? "md:translate-x-[calc(100vw-400px)]" : "translate-x-[100vw] "}`}>
                <Cesta setCard={setCard}/>
            </aside>
            <div className="fixed bottom-0 right-0 mb-4 mr-2 group z-50"  onClick={() => setIaChat(true)}>
                    <div 
                    className="w-72 bg-white mb-4 px-4 py-4 hidden group-hover:block absolute rounded bottom-full right-1/3 shadow-lg after:content-[''] after:absolute after:-bottom-4 after:right-3 after:border-8 after:border-transparent after:border-t-white after:shadow-lg"
                    >
                        <span className="font-open-sans text-sm">Pregúntame, soy tu asistente experto en tecnología</span>
                    </div>
                <img src="https://cdn.pccomponentes.com/img/asistente/avatar_circle.png" alt="Bot ia" className="size-14"/>
            </div>
            <div className="hidden pb-2.5 pt-23 px-8 tablet:flex justify-end gap-2 font-open-sans text-sm text-text-font border-b border-gris-claro">
                <div title="Especial Logitech -40%">
                    <a href="https://www.pccomponentes.com/logiplay" className="px-4 pb-2.5 pt-3 rounded hover:bg-hover-container">
                        Especial Logitech -40%
                    </a>
                </div>
                <div title="Nuevos iPhone 17">
                    <a href="https://www.pccomponentes.com/iphone-17-series" className="px-4 pb-2.5 pt-3 rounded hover:bg-hover-container ">
                        Nuevos iPhone 17
                    </a>
                </div>
                <div title="Intel Week">
                    <a href="https://www.pccomponentes.com/ofertas-especiales?tag=intel-week" className="px-4 pb-2.5 pt-3 rounded hover:bg-hover-container ">
                        Intel Week
                    </a>
                </div>
                <div title="¡Ofertas TOP de la semana!">
                    <a href="https://www.pccomponentes.com/ofertas-especiales" className="px-4 py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pccom1 to-pccom2">
                        ¡Ofertas TOP de la semana!
                    </a>
                </div>
            </div>
        </>
    )
}