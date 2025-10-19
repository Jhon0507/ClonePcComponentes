import { useState } from "react";
import { ExitIcon, SendIcon, ReloadIcon } from "../Icons";
import ReactMarkdown from "react-markdown"
import Loading from "../Loading";

function ChatIA({iaChat, setIaChat}) {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSend = async e => {
        e.preventDefault()
        if (!newMessage.trim()) return

        // Agregar el mensaje a la conversación
        const userMsg = { id: Date.now(), text: newMessage, sender: "me" }
        setMessages((prev) => [...prev, userMsg])
        setNewMessage("")
        setLoading(true)

        try {
            // Llamada a OpenAI
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: "Eres un experto en ordenadores y hardware, preparado para hacer presupuestos de ordenadores, aconsejando sobre pcs, portátiles, móviles, consolas..." },
                        { role: "user", content: newMessage }
                    ]
                })
            })

            const data = await response.json()

            // Respuesta de la IA
            const aiMsg = { id: Date.now() + 1, text: data.choices[0].message.content, sender: "ia", }
            setMessages((prev) => [...prev, aiMsg])
        } catch (error) {
            console.log("Error con OpenAI: ", error)
            // Mensaje de error en el chat
            setMessages((prev) => [
                ...prev,
                { id: Date.now + 2, text: "⚠️ Error al obtener respuesta", sender: "ia" }
            ])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex px-6 py-6 justify-between items-center">
                <h2 className="font-bold font-open-sans text-size-17 text-text-font">Pregúntame, soy tu asistente experto en tecnología</h2>
                <div className="px-4 py-2 hover:bg-hover-container rounded" onClick={() => setIaChat(!iaChat)}>
                    <ExitIcon/>
                </div>
            </div>
            <div className="h-full overflow-y-auto py-4 pl-6 text-text-font text-sm font-open-sans">
                <p className="mr-16 mb-4">¡Hola! 👋 Soy el asistente virtual de PcComponentes.</p>
                <p className="mr-16 mb-4">Únicamente usaremos la información que nos des para ayudarte con tu consulta. Para tu tranquilidad, no recopilamos datos personales. Puedes saber más en nuestra <a href="https://www.pccomponentes.com/privacidad" className="underline">Política de privacidad</a>.</p>
                <p className="mr-16">¿En qué puedo ayudarte hoy?</p>
                <div className="flex-1">
                    {messages.map(msg => (
                        <div
                        key={msg.id}
                        className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                            className={`${
                                msg.sender === "me"
                                ? "bg-naranja-chat p-4 mr-3 rounded-lg"
                                : "bg-white py-4 prose prose-sm"
                            }`}
                            >
                                <ReactMarkdown>{msg.text}</ReactMarkdown> 
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="py-4 flex gap-2 text-pccom1">
                                <Loading/>
                                <p className="text-gray-600">Estoy procesando tu consulta...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-3 ml-6 mr-8 mb-7">
                <div className={messages.length > 0 ? "block" : "hidden"}>
                    <button 
                    className="p-3 border rounded border-gris-claro hover:bg-hover-container"
                    onClick={() => setMessages([])}
                    >
                        <ReloadIcon/>
                    </button>
                </div>
                <div className="w-full border border-gris-claro rounded hover:border-black">
                    <form 
                    className="flex items-center"
                    onSubmit={handleSend}
                    >
                        <input 
                        type="text"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        placeholder="Escribe aquí tu consulta"
                        className="h-12 w-full outline-0 px-4 text-size-17 font-open-sans"
                        />
                        <button
                        type="submit"
                        className="px-2"
                        disabled={loading}
                        >
                            <SendIcon/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        );
}

export default ChatIA;
