"use client"; // Esto convierte al componente en un Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold mb-4 md:mb-0">C-Dev-JR</div>

        {/* Botón de Hamburguesa */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navbar */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>

          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link href="#about" onClick={toggleMenu}>Sobre mí</Link></li>
            <li><Link href="#skills" onClick={toggleMenu}>Habilidades</Link></li>
            <li><Link href="#projects" onClick={toggleMenu}>Proyectos</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contacto</Link></li>
          </ul>

        </nav>
      </div>
    </header>
  );
}

