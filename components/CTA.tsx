import Link from 'next/link';

export default function CTA() {
    return (
        <section id="contact" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container">
                <div className="glass-panel" style={{
                    padding: '4rem 2rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Elevate?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Let&apos;s build something extraordinary together. Schedule your free strategy call today.
                    </p>
                    <Link href="#contact" style={{
                        background: 'var(--foreground)',
                        color: 'var(--background)',
                        padding: '1rem 2.5rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 700,
                        fontSize: '1.1rem'
                    }}>
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
