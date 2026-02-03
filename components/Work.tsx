export default function Work() {
    const projects = [
        {
            client: 'Nebula Tech',
            category: 'SaaS Launch',
            description: 'Scaled daily active users by 300% in 14 days through a targeted multi-channel strategy.',
            result: '+300% DAU',
            tags: ['Growth', 'PPC', 'Analytics'],
            gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(0, 0, 0, 0))'
        },
        {
            client: 'Oceanic',
            category: 'Rebranding',
            description: 'Modernized brand identity resulting in 40% increase in market engagement and sentiment.',
            result: '40% Lift',
            tags: ['Brand Identity', 'Design'],
            gradient: 'linear-gradient(135deg, rgba(189, 0, 255, 0.1), rgba(0, 0, 0, 0))'
        },
        {
            client: 'Zenith',
            category: 'User Acquisition',
            description: 'Reduced cost per install by 50% while maintaining high lifetime value users.',
            result: '-50% CPI',
            tags: ['Mobile', 'User Acquisition'],
            gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0))'
        },
        {
            client: 'EcoLife',
            category: 'Social Movement',
            description: 'Viral sustainability campaign reaching 2M+ organic impressions across socials.',
            result: '2M+ Reach',
            tags: ['Social', 'Viral', 'Content'],
            gradient: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(189, 0, 255, 0.05))'
        }
    ];

    return (
        <section id="work" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ 
                        fontSize: '3.5rem', 
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Selected Work
                    </h2>
                    <p style={{ 
                        color: 'rgba(255,255,255,0.6)', 
                        fontSize: '1.2rem',
                        maxWidth: '600px'
                    }}>
                        Results-driven campaigns that move accurate metrics.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '3rem',
                            borderRadius: 'var(--radius-md)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '400px',
                            transition: 'transform 0.3s ease, border-color 0.3s ease'
                        }}>
                             {/* Abstract Background */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: project.gradient,
                                opacity: 0.6,
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'flex-start',
                                    marginBottom: '2rem'
                                }}>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{project.client}</h3>
                                        <span style={{ 
                                            color: 'var(--primary)', 
                                            textTransform: 'uppercase', 
                                            fontSize: '0.875rem', 
                                            letterSpacing: '0.1em',
                                            fontWeight: 600
                                        }}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <span style={{ fontWeight: 700 }}>{project.result}</span>
                                    </div>
                                </div>
                                
                                <p style={{ 
                                    fontSize: '1.125rem', 
                                    lineHeight: 1.6, 
                                    color: 'rgba(255,255,255,0.8)',
                                    marginBottom: '3rem'
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            <div style={{ 
                                position: 'relative', 
                                zIndex: 1,
                                display: 'flex',
                                gap: '0.75rem',
                                flexWrap: 'wrap'
                            }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.875rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: 'var(--radius-full)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
