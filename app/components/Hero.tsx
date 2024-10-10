import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-gray-900 text-white h-80 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">¡Hola, soy Ciro Rey!</h1>
            <p className="text-base md:text-lg mb-4">FullStack Developer, apasionado por construir experiencias increíbles.</p>
            <Link href="#projects" passHref>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Proyectos
                </button>
            </Link>
        </section>
    );
}