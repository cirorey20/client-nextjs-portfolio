"use client"; // Esto asegura que el componente se ejecute en el cliente
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto
    setIsSending(true); // Indica que el mensaje está siendo enviado

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage("Mensaje enviado con éxito.");
        // Limpiar los campos de entrada al enviar correctamente
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("Error al enviar el mensaje.");
      }
    } catch (error) {
      setResponseMessage("Error al enviar el mensaje.");
      console.error("Error:", error);
    } finally {
      setIsSending(false); // Termina el estado de envío
    }
  };

  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-2 mb-4 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)} // Almacena el valor del campo nombre
            required
          />
          <input
            type="email"
            placeholder="Tu email"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Almacena el valor del campo email
            required
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-2 mb-4 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Almacena el valor del campo mensaje
            required
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={isSending} // Deshabilita el botón cuando el mensaje está siendo enviado
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-sm text-green-500">{responseMessage}</p>
        )}
      </div>
    </section>
  );
}




// export default function Contact() {
//     return (
//         <section id="contact" className="bg-gray-100 text-gray-800 py-16">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-3xl font-bold mb-8">Contacto</h2>
//                 <form className="max-w-lg mx-auto">
//                     <input type="text" placeholder="Tu nombre" className="w-full p-2 mb-4 border rounded" />
//                     <input type="email" placeholder="Tu email" className="w-full p-2 mb-4 border rounded" />
//                     <textarea placeholder="Tu mensaje" className="w-full p-2 mb-4 border rounded"></textarea>
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Enviar
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }