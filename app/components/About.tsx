"use client"; // Esto convierte al componente en un Client Component
import { useEffect, useState } from "react";

// Ajustamos la interfaz para que coincida con la nueva estructura del JSON
interface UserData {
  name: string;
  nameLast: string;
  email: string;
  headLine: string;
  about: string;
  experience: string;
  skillTech: string; // Sigue siendo un string JSON, lo manejaremos más adelante si es necesario
  age: string;
  img: string;
  github: string;
  linkdin: string;
}

export default function About() {

    const [data, setData] = useState<UserData | null>(null);

    useEffect(() => {
        // Aquí iría la lógica para obtener los datos de una API o de cualquier otra fuente
        fetch('/api/googleSheets/users')
          .then((response) => response.json())
          .then((result: UserData[]) => {
            if (result && result.length > 0) {
              setData(result[0]); // Guarda el primer personaje del array en el estado
            }
          })
          .catch((error) => console.error('Error al obtener los datos:', error));
      }, []);
    


    return (
        <section id="about" className="bg-white text-gray-800 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={data?.img || 'https://avatars.githubusercontent.com/u/74796071?v=4'} alt="Foto de perfil" className="rounded-full w-48 mx-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                    <p>{data? `${data.about}` : 'Cargando...'}</p>
                    <p className="mt-2"><strong>Residencia:</strong> {data?.experience}</p>
                    <p className="mt-2"><strong>Email:</strong> {data?.email}</p>
                    {/* <p className="mt-2"><strong>Edad:</strong> {data?.age}</p> */}
                </div>
            </div>
        </section>
    );
}