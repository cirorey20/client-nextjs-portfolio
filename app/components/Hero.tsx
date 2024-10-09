export default function Hero() {
    return (
        <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">¡Hola, soy [Tu Nombre]!</h1>
            <p className="text-lg mb-8">Desarrollador Frontend apasionado por construir experiencias increíbles.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Descubre más
            </button>
        </section>
    );
}