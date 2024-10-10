import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold mb-4 md:mb-0">C-Dev-JR</div>
        
        {/* Navbar */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link href="#about">Sobre mí</Link></li>
            <li><Link href="#skills">Habilidades</Link></li>
            <li><Link href="#projects">Proyectos</Link></li>
            <li><Link href="#contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
