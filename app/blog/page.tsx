import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Elevate',
    description: 'Insights on digital marketing, SEO, and brand strategy.',
};

const posts = [
    {
        slug: 'modern-yuppie-tailoring',
        title: 'The Return of Modern Yuppie Tailoring',
        excerpt: 'Sharp lines, power suits, and the new rules of corporate chic.',
        date: 'Oct 20, 2024',
        category: 'Trends',
        readTime: '4 min read'
    },
    {
        slug: 'eco-fabrics-copenhagen',
        title: 'Eco-Conscious Fabrics from Copenhagen',
        excerpt: 'How Scandinavian design is leading the sustainable fashion revolution.',
        date: 'Oct 15, 2024',
        category: 'Sustainability',
        readTime: '5 min read'
    },
    {
        slug: 'urban-street-style',
        title: 'Street Style 2024: Urban Chic',
        excerpt: 'A curated look at the defining streetwear moments of the season.',
        date: 'Oct 05, 2024',
        category: 'Style Guide',
        readTime: '6 min read'
    },
    {
        slug: 'capsule-wardrobe',
        title: 'Building the Perfect Capsule Wardrobe',
        excerpt: 'Minimal effort, maximum impact. The essentials you actually need.',
        date: 'Sep 28, 2024',
        category: 'Essentials',
        readTime: '3 min read'
    }
];

export default function BlogListing() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 className="text-gradient animate-fade-in" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Insights & Ideas
                    </h1>
                    <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: '#ccc', animationDelay: '0.1s' }}>
                        Thoughts on the changing digital landscape.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {posts.map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="glass-panel animate-fade-in" style={{
                            display: 'block',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border)',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            animationDelay: `${0.1 + index * 0.1}s`,
                            textDecoration: 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '1rem',
                                fontSize: '0.85rem',
                                color: 'var(--primary)',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                <span>{post.category}</span>
                                <span style={{ color: '#666', fontWeight: 400 }}>{post.readTime}</span>
                            </div>

                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                                {post.title}
                            </h2>

                            <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {post.excerpt}
                            </p>

                            <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                {post.date}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
