import Link from 'next/link';

export default function CTA() {
    return (
        <section id="contact" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container">
                <div className="glass-panel" style={{
                    padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%)',
                    border: '1px solid var(--border)'
                }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem' }}>Ready to Elevate?</h2>
                    <p style={{ fontSize: '1.125rem', color: '#ccc', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Let&apos;s build something extraordinary together. Schedule your free strategy call today.
                    </p>
                    <Link href="#contact" style={{
                        background: 'var(--foreground)',
                        color: 'var(--background)',
                        padding: '1rem 2.5rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        display: 'inline-block'
                    }}>
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
