import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dummy data fetching - would be a real request in production
async function getPost(slug: string) {
    const posts: Record<string, { title: string; content: string; date: string; category: string }> = {
        'future-of-seo-2025': {
            title: 'The Future of SEO in 2025',
            date: 'Oct 12, 2024',
            category: 'SEO',
            content: `
        <p>Search Engine Optimization is evolving rapidly. As AI becomes more integrated into search algorithms, the focus is shifting from keyword density to user intent and semantic understanding.</p>
        <h3>The Rise of AI Search</h3>
        <p>With tools like ChatGPT and Google's Gemini, users are getting answers directly. This means "zero-click" searches will dominate. Brands need to optimize for being the source of truth.</p>
        <h3>Voice Search</h3>
        <p>Conversational queries are becoming the norm. Long-tail keywords and natural language processing are key.</p>
        <p>To stay ahead, focus on high-quality, authoritative content that answers real questions comprehensively.</p>
      `
        },
        'brand-storytelling': {
            title: 'Mastering Brand Storytelling',
            date: 'Sep 28, 2024',
            category: 'Branding',
            content: `
        <p>People don't buy products; they buy stories. A compelling narrative connects with your audience on an emotional level, building trust and loyalty.</p>
        <h3>The Hero's Journey</h3>
        <p>Position your customer as the hero, and your brand as the guide. This classic framework resonates deeply.</p>
        <p>Authenticity is key. In a world of polished ads, raw and real stories cut through the noise.</p>
      `
        }
    };

    return posts[slug] || null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found' };
    return { title: `${post.title} | Elevate Blog` };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article style={{ paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link href="/blog" style={{
                    display: 'inline-block',
                    marginBottom: '2rem',
                    color: 'var(--primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                }}>
                    ← Back to Insights
                </Link>

                <header style={{ marginBottom: '3rem' }}>
                    <div style={{
                        color: 'var(--secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        marginBottom: '1rem'
                    }}>
                        {post.category}
                    </div>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        {post.title}
                    </h1>
                    <div style={{ color: '#666' }}>Published on {post.date}</div>
                </header>

                <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} style={{
                    fontSize: '1.15rem',
                    lineHeight: '1.8',
                    color: '#ddd'
                }} />

                <style dangerouslySetInnerHTML={{
                    __html: `
                .prose p { margin-bottom: 1.5rem; }
                .prose h3 { font-size: 1.75rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--foreground); }
                `}} />
            </div>
        </article>
    );
}
