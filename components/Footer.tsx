'use client';

import { CSSProperties, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubscribe = async () => {
        if (!email) return;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            }
        } catch (error) {
            console.error('Failed to subscribe:', error);
        }
    };

    const footerStyle: CSSProperties = {
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '6rem 0 2rem',
        marginTop: '6rem',
    };

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '4rem',
    };

    const headingStyle: CSSProperties = {
        marginBottom: '1.5rem',
        fontSize: '1.2rem',
        color: 'var(--foreground)',
    };

    const linkStyle: CSSProperties = {
        display: 'block',
        marginBottom: '0.75rem',
        color: '#666',
        transition: 'color 0.2s, transform 0.2s',
        cursor: 'pointer',
    };

    // Services stay in place but have hover effect
    const serviceItemStyle: CSSProperties = {
        ...linkStyle,
        cursor: 'default', // Disable click
    };

    return (
        <footer style={footerStyle}>
            <div className="container" style={gridStyle}>
                <div>
                    <h3 style={{ ...headingStyle, fontSize: '1.75rem', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                        Elevate<span style={{ color: 'var(--primary)' }}>.</span>
                    </h3>
                    <p style={{ color: '#888', lineHeight: '1.7', maxWidth: '300px' }}>
                        Transforming brands through data-driven creativity and strategic innovation.
                    </p>
                </div>

                <div>
                    <h4 style={headingStyle}>Company</h4>
                    <nav style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link href="/about" className="footer-link" style={linkStyle}>About</Link>
                        <Link href="/careers" className="footer-link" style={linkStyle}>Careers</Link>
                        <Link href="/contact" className="footer-link" style={linkStyle}>Contact</Link>
                    </nav>
                </div>

                <div>
                    <h4 style={headingStyle}>Services</h4>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {['SEO & Marketing', 'Web Development', 'Brand Strategy'].map(service => (
                            <span key={service} style={serviceItemStyle}>
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={headingStyle}>Newsletter</h4>
                    <p style={{ color: '#888', marginBottom: '1rem' }}>Latest trends in your inbox.</p>

                    {status === 'success' ? (
                        <div style={{
                            padding: '1rem',
                            background: 'rgba(0, 242, 254, 0.1)',
                            color: 'var(--primary)',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 500,
                            border: '1px solid var(--primary-glow)'
                        }}>
                            ✓ Welcome email sent!
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    color: 'white', // Ensure white text in dark mode
                                    width: '100%',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                            <button
                                onClick={handleSubscribe}
                                style={{
                                    background: 'var(--primary-gradient)',
                                    color: 'white',
                                    padding: '0 1.2rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontWeight: 700,
                                    boxShadow: '0 0 15px var(--primary-glow)'
                                }}>
                                →
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="container" style={{
                marginTop: '5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Elevate Marketing Agency. All rights reserved.
            </div>

            <style jsx>{`
                .footer-link:hover {
                    color: var(--primary) !important;
                    transform: translateY(-2px);
                    text-shadow: 0 0 8px var(--primary-glow);
                }
            `}</style>
        </footer>
    );
}
