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

        const { data, error: resendError } = await resend.emails.send({
            from: 'Hepsi <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome to the Family!',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                    <div style="text-align: center; padding: 20px 0;">
                        <h1 style="font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">Hepsi</h1>
                    </div>

                    <p>Welcome to the Family!</p>
                    
                    <p>We believe that staying ahead of the curve shouldn't feel like a chore. That’s why you’re here—and we’re thrilled to have you.</p>
                    
                    <p>From now on, your inbox is a curated sanctuary for the latest shifts in fashion, lifestyle, and design. Whether it's the sudden resurgence of Modern Yuppie tailoring or the latest eco-conscious fabrics from Copenhagen, you'll hear it from Hepsi first.</p>
                    
                    <h3 style="margin-top: 30px;">What to expect from us:</h3>
                    <ul>
                        <li><strong>Weekly Trend Reports:</strong> Deep dives into what’s "now" and what’s "next."</li>
                        <li><strong>Style Guides:</strong> How to wear the trends without losing your personal edge.</li>
                        <li><strong>Early Access:</strong> Be the first to know about our exclusive drops and seasonal sales.</li>
                    </ul>
                    
                    <div style="background: #f9f9f9; padding: 20px; text-align: center; margin-top: 30px; border-radius: 8px;">
                        <h3>A little something to get you started...</h3>
                        <p>As a thank you for joining our community, enjoy 10% OFF your next order.</p>
                        <p style="font-size: 18px; font-weight: bold; letter-spacing: 1px;">Your Code: HEPSITREND10</p>
                        <a href="#" style="background: #000; color: #fff; padding: 12px 24px; text-decoration: none; display: inline-block; margin-top: 10px; border-radius: 4px;">SHOP LATEST ARRIVALS</a>
                    </div>
                    
                    <p style="margin-top: 40px;">Stay inspired,<br>The Hepsi Team</p>
                </div>
            `,
        });

        if (resendError) {
            console.error('Resend API Error:', resendError);
            return NextResponse.json({ error: resendError }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (err: any) {
        console.error('Email API Route Error:', err);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: err.message
        }, { status: 500 });
    }
}
