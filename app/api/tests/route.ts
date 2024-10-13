import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();

  try {
    console.log(email, subject, message)
    return NextResponse.json(email);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return NextResponse.json({ error: 'Error al obtener los datos' }, { status: 500 });
  }
}
