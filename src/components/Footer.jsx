import FooterFinal from "./Footer/FooterFinal"
import FooterFinalMobile from "./Footer/FooterFinalMobile"

function Footer() {

    return (
        <>
        <div className="max-w-390 px-8 mb-4 mx-auto">
            <div>
                <h2 className="text-text-font text-sm font-bold font-open-sans mb-4">PcComponentes es tu tienda online de tecnología e informática</h2>
                <p className="text-text-font text-xs font-open-sans">
                    Somos la <span className="font-bold">tienda online líder en tecnología</span>, basada en la confianza, la experiencia de compra y el conocimiento del sector tecnológico. 
                    Desde 2005 somos <span className="font-bold">expertos</span> en informática y electrónica. Buscamos innovar, descubrir y responder día a día a las últimas necesidades de la comunidad 
                    más tecnológica siendo el cliente nuestra razón de ser, superando siempre sus expectativas.
                </p>
                <p className="text-text-font text-xs font-open-sans">
                    Actualmente contamos con más de 100.000 artículos disponibles y 31.700 m2 repartidos entre todas nuestras instalaciones, 
                    además de cuatro <a href="https://www.pccomponentes.com/tiendas" className="underline hover:text-pccom1">tiendas físicas</a> en <span className="font-bold">Madrid, Barcelona, Murcia y Alhama de Murcia</span>.
                </p>
                <h2 className="text-text-font text-sm font-bold font-open-sans mt-6 mb-4">Los expertos en tecnología más comprometidos contigo</h2>
                <p className="text-text-font text-xs font-open-sans">Nuestros <a href="https://www.pccomponentes.com/compromisos" className="underline hover:text-pccom1">compromisos</a> se centran en ser expertos en lo que vendemos y garantizar al cliente todo lo que necesita:</p>
                <ul className="text-text-font text-xs font-open-sans mb-4 pl-7.5 list-disc">
                    <li className="mb-2"><span className="font-bold">Envíos gratuitos</span> a partir de 50€ siempre en <span className="font-bold">24 horas*</span> (si excepcionalmente incumplimos la fecha de entrega, te devolvemos los gastos de envío).</li>
                    <li className="mb-2"><span className="font-bold">Garantía</span> con la mejor solución para ti en <span className="font-bold">24h.</span></li>
                    <li className="mb-2"><span className="font-bold">Devoluciones gratuitas.</span></li>
                    <li className="mb-2"><span className="font-bold">Atención al cliente local y sin esperas.</span></li>
                    <li className="mb-2">Nos tomamos muy en serio las <span className="font-bold">opiniones</span> de nuestros clientes, y puedes verlas siempre en nuestros artículos</li>
                </ul>
                <p className="text-text-font text-xs font-open-sans">Bienvenido a PcComponentes.</p>
            </div>
        </div>
        <div className="hidden laptop:block">
            <FooterFinal/>
        </div>
        <div className="block laptop:hidden">
            <FooterFinalMobile/>
        </div>
        <div className="max-w-390 mx-auto p-8 text-center text-text-font text-xs font-open-sans">
            <p>PC Componentes y Multimedia SLU CIF B73347494. AVDA Europa, Parcela 2-5 y 2-6. Polígono industrial Las Salinas, 30840, Alhama de Murcia, Murcia. ESPAÑA.</p>
        </div>
        </>
        
    )
}

export default Footer