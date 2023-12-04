import Card from './components/card'

async function getData() {
    const res = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main className='is-paper'>
            <div className="p-strip">
                <div className="row">
                    {data.map((post) => (
                        <Card key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </main>
    )
}
