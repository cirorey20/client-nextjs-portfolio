export default function About() {
    return (
        <section id="about" className="bg-white text-gray-800 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="/profile.jpg" alt="Foto de perfil" className="rounded-full w-48 mx-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                    <p>Soy un desarrollador con experiencia en React, Next.js y Tailwind CSS, creando aplicaciones web modernas y responsivas.</p>
                </div>
            </div>
        </section>
    );
}