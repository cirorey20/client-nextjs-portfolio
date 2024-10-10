"use client"; // Esto convierte al componente en un Client Component
import { useEffect, useState } from "react";

// Ajustamos la interfaz para que coincida con la nueva estructura del JSON
interface Skill {
    img: string;
    name: string;
    level: string;
}

interface UserData {
    skillTech: string;
}

export default function Skills() {

    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('/api/googleSheets/users')
            .then((response) => response.json())
            .then((result: UserData[]) => {
                if (result && result.length > 0) {
                    try {
                        const userSkills = JSON.parse(result[0].skillTech) as Skill[];
                        setSkills(userSkills); // Guarda las habilidades parseadas en el estado
                    } catch (error) {
                        console.error('Error al parsear skillTech:', error);
                    }
                }
            })
            .catch((error) => console.error('Error al obtener los datos:', error));
    }, []);



    return (
        <section id="skills" className="bg-gray-100 text-gray-800 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex flex-col items-center">
                            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-2" />
                            <span className="font-bold">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.level}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}