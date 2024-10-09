export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 text-gray-800 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contacto</h2>
                <form className="max-w-lg mx-auto">
                    <input type="text" placeholder="Tu nombre" className="w-full p-2 mb-4 border rounded" />
                    <input type="email" placeholder="Tu email" className="w-full p-2 mb-4 border rounded" />
                    <textarea placeholder="Tu mensaje" className="w-full p-2 mb-4 border rounded"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}