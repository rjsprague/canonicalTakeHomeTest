import Image from 'next/image';
import Link from 'next/link';

export default function Card({ post }) {

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', dateOptions);

    const groupName = post._embedded['wp:term'].flat().find(term => term.taxonomy === 'group')?.name;
    const groupSlug = post._embedded['wp:term'].flat().find(term => term.taxonomy === 'group')?.slug;

    const tagsName = post._embedded['wp:term'].flat().find(term => term.taxonomy === 'post_tag')?.name;
    const tagsSlug = post._embedded['wp:term'].flat().find(term => term.taxonomy === 'post_tag')?.slug;
    
    const categoryName = post._embedded['wp:term'].flat().find(term => term.taxonomy === 'category')?.name;

    // Use the `post` data to populate the card content
    return (
        <div className="col-4 col-medium-2  blog-p-card--post">
            <header className={`blog-p-card__header highlight--${groupSlug ? groupSlug : tagsSlug}`}>
                <h5 className="p-muted-heading u-no-margin--bottom">{groupName ? groupName : tagsName}</h5>
            </header>
            <div className="blog-p-card__content">
                <Link href={post.link} target={'_blank'} rel={'noopener noreferrer'}>
                    <Image src={post.featured_media} alt={post.title.rendered} className="p-card__image" height={185} width={330} />
                </Link>
                <Link href={post.link} target={'_blank'} rel={'noopener noreferrer'}>
                    <h4 className="p-card__title">{post.title.rendered}</h4>
                </Link>
                <p className="p-card__content">By <Link href={post._embedded.author[0].link} target={'_blank'} rel={'noopener noreferrer'}>{post._embedded.author[0].name}</Link> on {formattedDate}</p>
            </div>
            <footer className="blog-p-card__footer">
                <p>{categoryName}</p>
            </footer>
        </div>
    );
}