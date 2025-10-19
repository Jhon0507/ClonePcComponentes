import { useState, useEffect } from "react"

export function useOpenLeftNav () {
    const [showNavLeft, setShowNavLeft] = useState(false)
    const [iaChat, setIaChat] = useState(false)
    const [card, setCard] = useState(false)

    useEffect(() => {
        if (showNavLeft || iaChat || card) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [showNavLeft, iaChat, card])

    return { showNavLeft, setShowNavLeft, iaChat, setIaChat, card, setCard}
}
