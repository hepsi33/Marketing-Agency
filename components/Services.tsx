'use client';
export default function Services() {
    const services = [
        {
            title: 'SEO & Performance',
            description: 'Dominate search rankings and drive qualified traffic with our data-first approach.',
            icon: '🚀'
        },
        {
            title: 'Content Strategy',
            description: 'Compelling narratives that resonate with your audience and build lasting brand authority.',
            icon: '✍️'
        },
        {
            title: 'Social Media Growth',
            description: 'Cultivate engaged communities and viral moments across all major platforms.',
            icon: '⚡'
        }
    ];

    return (
        <section id="services" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                    <p style={{ color: '#888' }}>Full-spectrum digital solutions.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-md)',
                            transition: 'all 0.4s ease',
                            cursor: 'default',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Hover Glow Effect */}
                            <div className="hover-glow" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'var(--primary-glow)',
                                opacity: 0,
                                transition: 'opacity 0.4s ease',
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                                <p style={{ color: '#aaa', lineHeight: '1.6' }}>{service.description}</p>
                            </div>

                            <style jsx>{`
                                .glass-panel:hover {
                                    transform: translateY(-10px);
                                    border-color: var(--primary);
                                }
                                .glass-panel:hover .hover-glow {
                                    opacity: 1;
                                }
                            `}</style>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
