// export async function GET(request: Request) {
//     const { pathname } = new URL(request.url);
//     const url = pathname.split('/api/blog/')[1].split('/');
//     const [category, slug] = url;

//     const res = await fetch(`https://dev.to/api/articles?username=rhaqim${category ? `&tag=${category}` : ''}`);
//     const posts = await res.json();

//     if (res.ok) {
//         const post = posts.find((post: any) => post.slug === slug);
//         if (post) {
//         return {
//             body: JSON.stringify(post)
//         };
//         }
//         return {
//         status: 404,
//         body: JSON.stringify({ message: 'Not found' })
//         };
//     }
//     return {
//         status: res.status,
//         body: JSON.stringify({ message: 'Not found' })
//     };
// }

interface Blog {
  id: string
  title: string
  excerpt: string
}

export async function GET(request: Request) {
  const { pathname } = new URL(request.url)
  const url = pathname.split('/api/blog/')[1].split('/')
  const [category, slug] = url

  const res = await fetch(
    `https://dev.to/api/articles?username=rhaqim${
      category ? `&tag=${category}` : ''
    }`
  )
  const posts = await res.json()

  if (res.ok) {
    const post = posts.find((post: any) => post.slug === slug)
    if (post) {
      const body = JSON.stringify(post) as unknown as Blog
      return {
        body
      }
    }
    return {
      status: 404,
      body: JSON.stringify({ message: 'Not found' })
    }
  }
  return {
    status: res.status,
    body: JSON.stringify({ message: 'Not found' })
  }
}
