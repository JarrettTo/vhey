import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, phone, message } = body;

  // Validate the data
  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your email provider's SMTP host
      port: 465, // Use 465 for secure connections
      secure: true, // Use true for 465
      auth: {
        user: process.env.EMAIL_USER, // Your email address from environment variables
        pass: process.env.EMAIL_PASS, // Your app-specific password from environment variables
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact Form" <${email}>`, // Sender address
      to: 'hello@heymaria.me', // Your email address
      subject: 'New Contact Form Submission', // Subject line
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
