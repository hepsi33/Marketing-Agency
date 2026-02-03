export default function Contact() {
    return (
        <main className="container" style={{ padding: '8rem 1.5rem', minHeight: '80vh' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Get in Touch</h1>
                <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '4rem' }}>
                    Ready to elevate your brand? We&apos;d love to hear from you.
                </p>

                <div className="glass-panel" style={{
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'left'
                }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>Email Us</h3>
                        <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>hepsikumar333@gmail.com</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>Call Us</h3>
                        <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>+91 9606057586</p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>Visit Us</h3>
                        <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                            Bangalore, Karnataka, India
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
