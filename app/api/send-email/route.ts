import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // 1. Send Welcome Email to Subscriber
        // NOTE: In Resend Sandbox mode, this ONLY works if the 'to' address is your account email.
        const { data: welcomeData, error: welcomeError } = await resend.emails.send({
            from: 'Hepsi <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome to the Hepsi Family!',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                    <h2>Welcome to Hepsi!</h2>
                    <p>We're thrilled to have you. You'll now receive our latest updates on fashion and lifestyle.</p>
                    <p>Stay inspired,<br>The Hepsi Team</p>
                </div>
            `,
        });

        // 2. Send Notification to Owner (hepsikumar333@gmail.com)
        // This ensures YOU get an email every time someone signs up.
        await resend.emails.send({
            from: 'Hepsi Signup Alert <onboarding@resend.dev>',
            to: ['hepsikumar333@gmail.com'],
            subject: 'New Newsletter Signup!',
            html: `<p>New user signed up: <strong>${email}</strong></p>`,
        });

        if (welcomeError) {
            console.error('Welcome Email Error:', welcomeError);
        }

        return NextResponse.json({ success: true, data: welcomeData });
    } catch (err) {
        const error = err as Error;
        console.error('Email API Route Error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message
        }, { status: 500 });
    }
}
