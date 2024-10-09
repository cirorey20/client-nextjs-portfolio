export default function Projects() {
    return (
        <section id="projects" className="bg-white text-gray-800 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded">Proyecto 1</div>
                    <div className="bg-gray-200 p-4 rounded">Proyecto 2</div>
                    <div className="bg-gray-200 p-4 rounded">Proyecto 3</div>
                </div>
            </div>
        </section>
    );
}