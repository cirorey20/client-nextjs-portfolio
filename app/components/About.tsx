"use client"; // Esto convierte al componente en un Client Component
import { useEffect, useState } from "react";

interface CharacterData {
    image: string;
  }
  
  interface ApiResponse {
    results: CharacterData[];
  }

export default function About() {

    const [data, setData] = useState<CharacterData | null>(null);

    useEffect(() => {
        // Aquí iría la lógica para obtener los datos de una API o de cualquier otra fuente
        fetch('/api/googleSheets')
          .then((response) => response.json())
          .then((result: ApiResponse) => {
            if (result.results && result.results.length > 0) {
              setData(result.results[0]); // Guarda el primer personaje del array en el estado
            }
          })
          .catch((error) => console.error('Error al obtener los datos:', error));
      }, []);
    


    return (
        <section id="about" className="bg-white text-gray-800 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={data?.image || 'https://avatars.githubusercontent.com/u/74796071?v=4'} alt="Foto de perfil" className="rounded-full w-48 mx-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                    <p>Soy un desarrollador con experiencia en React, Next.js y Tailwind CSS, creando aplicaciones web modernas y responsivas.</p>
                </div>
            </div>
        </section>
    );
}