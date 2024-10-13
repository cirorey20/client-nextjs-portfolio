import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_MAIL_GOOGLE,
        pass: process.env.PASS_MAIL_GOOGLE, // Asegúrate de usar una contraseña de aplicación si usas Gmail
      },
    });

    const mailOptions = {
      from: process.env.USER_MAIL_GOOGLE,
      to: process.env.USER_MAIL_GOOGLE,
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      replyTo: email // Aquí el email del remitente real
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    // Devuelve una respuesta exitosa
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    if(error instanceof Error) {
      console.error('Error enviando correo:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      console.error('Error enviando correo:', error);
      return NextResponse.json({ success: false, error: 'Error desconocido' }, { status: 500 });
    }
  }
}

