export default function About() {
    return (
        <main className="container" style={{ padding: '8rem 1.5rem', minHeight: '80vh' }}>
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>About Us</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '4rem', color: '#444' }}>
                At Elevate, we believe in the power of abstract thinking to solve concrete problems.
                Founded in 2024, our mission is to blend data science with artistic expression,
                creating marketing campaigns that are as effective as they are beautiful.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Philosophy</h3>
                    <p style={{ color: '#666' }}>
                        We don&apos;t follow trends; we set them. By leveraging predictive analytics and
                        avant-garde design principles, we position our clients years ahead of the competition.
                    </p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Team</h3>
                    <p style={{ color: '#666' }}>
                        A diverse collective of strategists, designers, and developers working in
                        perfect harmony to deliver digital excellence.
                    </p>
                </div>
            </div>
        </main>
    );
}
