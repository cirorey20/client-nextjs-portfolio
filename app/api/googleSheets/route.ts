import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return NextResponse.json({ error: 'Error al obtener los datos' }, { status: 500 });
    }
}
