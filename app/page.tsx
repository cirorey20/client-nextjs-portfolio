import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        src="https://avatars.githubusercontent.com/u/74796071?v=4" // Reemplaza con el enlace a tu imagen externa
        alt="Mi nueva imagen"
        style={{ width: '100%', height: 'auto' }}
        width={180} // Ajusta según el tamaño de tu imagen
        height={38} // Ajusta según el tamaño de tu imagen
        className= "rounded-full"

        priority
      />     
        <h1>Ciro DJR</h1>
      </main>
      
    </div>
  );
}
