export default function Careers() {
    const jobs = [
        { title: 'Senior Product Designer', type: 'Full-time', location: 'Remote' },
        { title: 'Growth Marketing Manager', type: 'Full-time', location: 'New York, NY' },
        { title: 'Frontend Developer (React)', type: 'Contract', location: 'Remote' }
    ];

    return (
        <main className="container" style={{ padding: '8rem 1.5rem', minHeight: '80vh' }}>
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Join the Team</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '4rem' }}>
                Help us build the future of digital marketing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {jobs.map((job, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '2rem',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>{job.type} • {job.location}</p>
                        </div>
                        <button style={{
                            background: 'var(--primary-gradient)',
                            border: 'none',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 4px 12px var(--primary-glow)'
                        }}>
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
