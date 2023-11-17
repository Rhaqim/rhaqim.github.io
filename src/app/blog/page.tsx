// pages/blog/index.tsx

import React from 'react'
// import Link from 'next/link'

// interface Blog {
//   id: string
//   title: string
//   excerpt: string
// }

const BlogList = () => {
  // const blogs: Blog[] = [
  //   { id: '1', title: 'Blog 1', excerpt: 'Excerpt for Blog 1' },
  //   { id: '2', title: 'Blog 2', excerpt: 'Excerpt for Blog 2' }
  //   // Add more blogs as needed
  // ]
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
      <ul>
        <h3>Upcoming...</h3>
        {/* {blogs.map(blog => (
          <li key={blog.id} className="mb-4">
            <Link href={`/blog/${blog.id}`}>
              <p className="text-blue-500 hover:underline">{blog.title}</p>
            </Link>
            <p className="text-gray-600">{blog.excerpt}</p>
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default BlogList
