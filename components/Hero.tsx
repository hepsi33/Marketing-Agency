import Link from 'next/link';

export default function Hero() {
    return (
        <section style={{
            padding: '8rem 0 6rem',
            textAlign: 'center',
            background: 'radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 70%)',
        }}>
            <div className="container">
                <h1 className="text-gradient animate-fade-in" style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1'
                }}>
                    Digital Mastery <br /> For Modern Brands
                </h1>
                <p className="animate-fade-in" style={{
                    fontSize: '1.25rem',
                    color: '#ccc',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    animationDelay: '0.1s'
                }}>
                    We craft data-driven campaigns and stunning digital experiences that captivate, convert, and scale.
                </p>
                <div className="animate-fade-in" style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    animationDelay: '0.2s'
                }}>
                    <Link href="#contact" style={{
                        background: 'var(--foreground)',
                        color: 'var(--background)',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 600,
                        fontSize: '1.1rem'
                    }}>
                        Start Your Journey
                    </Link>
                    <Link href="#work" style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        View Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
