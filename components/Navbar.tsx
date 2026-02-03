import Link from 'next/link';
import { CSSProperties } from 'react';

export default function Navbar() {
    const navStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        borderBottom: '1px solid var(--glass-border)',
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
    };

    const linkStyle: CSSProperties = {
        marginLeft: '2rem',
        fontSize: '0.95rem',
        fontWeight: 500,
        opacity: 0.9,
        transition: 'color 0.2s, opacity 0.2s',
    };

    return (
        <nav className="glass-panel" style={navStyle}>
            <div className="container" style={containerStyle}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
                    Elevate<span style={{ color: 'var(--primary)' }}>.</span>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/" style={linkStyle} className="nav-link">Home</Link>
                    <Link href="#services" style={linkStyle} className="nav-link">Services</Link>
                    <Link href="#work" style={linkStyle} className="nav-link">Work</Link>
                    <Link href="/blog" style={linkStyle} className="nav-link">Blog</Link>
                    <Link href="#contact"
                        style={{
                            ...linkStyle,
                            padding: '0.6rem 1.2rem',
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600
                        }}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
