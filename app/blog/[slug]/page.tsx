import Link from 'next/link';
import { notFound } from 'next/navigation';

const POSTS_DATA: Record<string, { title: string; content: string; date: string; category: string }> = {
    'modern-yuppie-tailoring': {
        title: 'The Return of Modern Yuppie Tailoring',
        date: 'Oct 20, 2024',
        category: 'Trends',
        content: `
            <p>Sharp lines, double-breasted blazers, and high-waisted trousers are making a definitive comeback. The "Modern Yuppie" aesthetic isn't just about office wear; it's a statement of structured elegance and power.</p>
            <h3>Defining the Look</h3>
            <p>Think oversized yet tailored silhouettes. It's the intersection of 80s excess and 2020s minimalism. Neutrals like charcoal, cream, and navy dominate the palette.</p>
            <h3>Why Now?</h3>
            <p>After years of loungewear dominance, fashion is swinging back toward formality, but with a comfortable, urban edge.</p>
        `
    },
    'eco-fabrics-copenhagen': {
        title: 'Eco-Conscious Fabrics from Copenhagen',
        date: 'Oct 15, 2024',
        category: 'Sustainability',
        content: `
            <p>Copenhagen Fashion Week has set a new gold standard for sustainability. Designers are moving beyond organic cotton into lab-grown leathers and recycled ocean plastics.</p>
            <h3>Innovative Materials</h3>
            <p>From mushroom-based textiles to seaweed-dyed silks, the future of fashion is being grown in labs and harvested responsibly in the North.</p>
            <h3>The Scandi Approach</h3>
            <p>It's not just about the fabric; it's about the lifecycle. Circularity is the goal, ensuring every garment can be recycled or composted.</p>
        `
    },
    'urban-street-style': {
        title: 'Street Style 2024: Urban Chic',
        date: 'Oct 05, 2024',
        category: 'Style Guide',
        content: `
            <p>Street style this year is a masterclass in layering and texture. Technical fabrics are being paired with vintage knits to create a look that is both futuristic and nostalgic.</p>
            <h3>Key Elements</h3>
            <p>Cargo silhouettes remain strong, but they are becoming more refined. Statement outerwear—think floor-length puffers and vibrant trench coats—is the centerpiece of the season.</p>
            <p>Accessories are bold: heavy-soled boots and structured crossbody bags complete the urban uniform.</p>
        `
    },
    'capsule-wardrobe': {
        title: 'Building the Perfect Capsule Wardrobe',
        date: 'Sep 28, 2024',
        category: 'Essentials',
        content: `
            <p>The secret to effortless style is a well-curated capsule wardrobe. By focusing on quality over quantity, you can create dozens of outfits from just a few key pieces.</p>
            <h3>The 10 Essentials</h3>
            <p>Start with a structured blazer, a perfect pair of dark denim, a crisp white shirt, and high-quality boots. These pieces form the foundation of any versatile wardrobe.</p>
            <h3>Mixing and Matching</h3>
            <p>Focus on a cohesive color palette. When every piece works together, getting dressed in the morning becomes a creative joy rather than a chore.</p>
        `
    }
};

export async function generateStaticParams() {
    return Object.keys(POSTS_DATA).map((slug) => ({
        slug: slug,
    }));
}

async function getPost(slug: string) {
    return POSTS_DATA[slug] || null;
}

export async function generateMetadata({ params }: { params: any }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Post Not Found' };
    return { title: `${post.title} | Elevate Blog` };
}

export default async function BlogPost({ params }: { params: any }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article style={{ paddingTop: 'clamp(5rem, 15vh, 8rem)', paddingBottom: '6rem' }}>
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

                <header style={{ marginBottom: 'clamp(2rem, 5vh, 3rem)' }}>
                    <div style={{
                        color: 'var(--secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        marginBottom: '1rem'
                    }}>
                        {post.category}
                    </div>
                    <h1 className="text-gradient" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        {post.title}
                    </h1>
                    <div style={{ color: '#666', fontSize: '0.95rem' }}>Published on {post.date}</div>
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
