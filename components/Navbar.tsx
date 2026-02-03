'use client';
import { CSSProperties, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Add scroll listener
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Set initial state Correctly
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: (mounted && isScrolled) ? 'rgba(3, 3, 3, 0.7)' : 'transparent',
        backdropFilter: (mounted && isScrolled) ? 'blur(15px)' : 'none',
        WebkitBackdropFilter: (mounted && isScrolled) ? 'blur(15px)' : 'none',
        borderBottom: (mounted && isScrolled) ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="glass-panel" style={navStyle}>
            <div className="container" style={containerStyle}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', zIndex: 101 }}>
                    Elevate<span style={{ color: 'var(--primary)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ alignItems: 'center' }}>
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

                {/* Mobile Toggle */}
                <button
                    className="mobile-only"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{
                        zIndex: 101,
                        color: 'var(--foreground)',
                        fontSize: '1.5rem'
                    }}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: 'var(--background)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 100,
                        animation: 'fadeIn 0.3s ease forwards'
                    }}>
                        <Link href="/" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 600 }}>Home</Link>
                        <Link href="#services" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 600 }}>Services</Link>
                        <Link href="#work" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 600 }}>Work</Link>
                        <Link href="/blog" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 600 }}>Blog</Link>
                        <Link href="#contact" onClick={toggleMenu}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                padding: '1rem 2rem',
                                background: 'var(--primary-gradient)',
                                borderRadius: 'var(--radius-full)',
                                color: 'white'
                            }}>
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
