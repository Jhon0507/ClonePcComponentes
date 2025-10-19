
function Trending({nombre, link, extra=null}) {
    return (
        <li className="my-5 tablet:my-4 text-text-font">
            <a 
            href={link}
            className="flex items-center gap-2 text-sm tablet:text-size-17 font-open-sans">
                {nombre} {extra ?
                (<div
                    className="text-xs font-bold border py-1 px-2 border-gris-claro rounded text-transparent bg-clip-text bg-gradient-to-r from-pccom1 to-pccom2"
                >{extra}</div>) 
                : null}
            </a>
        </li>
    )
}

export default Trending