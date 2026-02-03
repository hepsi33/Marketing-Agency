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
        // NOTE: In Resend Sandbox mode, 'from' MUST be exactly 'onboarding@resend.dev'
        // and 'to' MUST be your account email address.
        console.log('Attempting to send welcome email to:', email);
        const { data: welcomeData, error: welcomeError } = await resend.emails.send({
            from: 'onboarding@resend.dev',
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

        if (welcomeError) {
            console.error('Welcome Email Error Details:', JSON.stringify(welcomeError, null, 2));
        } else {
            console.log('Welcome Email Sent Successfully:', welcomeData?.id);
        }

        // 2. Send Notification to Owner (hepsikumar333@gmail.com)
        console.log('Attempting to send signup alert to owner...');
        const { data: alertData, error: alertError } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['hepsikumar333@gmail.com'],
            subject: 'New Newsletter Signup!',
            html: `<p>New user signed up: <strong>${email}</strong></p>`,
        });

        if (alertError) {
            console.error('Owner Alert Error Details:', JSON.stringify(alertError, null, 2));
        } else {
            console.log('Owner Alert Sent Successfully:', alertData?.id);
        }

        return NextResponse.json({
            success: true,
            welcomeId: welcomeData?.id,
            alertId: alertData?.id
        });
    } catch (err) {
        const error = err as Error;
        console.error('Email API Route Error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message
        }, { status: 500 });
    }
}
