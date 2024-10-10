"use client"; // Esto asegura que el componente se ejecute en el cliente
import { useEffect, useState } from "react";

// Definimos una interfaz para estructurar el tipo de datos que recibimos
interface Project {
    title: string;
    description: string;
    repoGithub: string | null;
    linkVideo: string | null;
    web: string | null;
    image: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Simulación de una llamada a la API para obtener los proyectos
        fetch('/api/googleSheets/posts') // Asegúrate de reemplazar esta ruta con la URL correcta de tu API
            .then((response) => response.json())
            .then((data: Project[]) => {
                setProjects(data);
            })
            .catch((error) => console.error('Error al obtener los proyectos:', error));
    }, []);

    return (
    <section id="projects" className="bg-white text-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.repoGithub && (
                <a href={project.repoGithub} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mb-2">
                  Ver en GitHub
                </a>
              )}
              {project.linkVideo && (
                <a href={project.linkVideo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mb-2">
                  Ver Video
                </a>
              )}
              {project.web && (
                <a href={project.web} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">
                  Visitar Sitio Web
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}