import { NextResponse } from 'next/server';

export async function GET() {
  
    try {
        return NextResponse.json(process.env.USER_MAIL_GOOGLE);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return NextResponse.json({ error: 'Error al obtener los datos' }, { status: 500 });
    }
}