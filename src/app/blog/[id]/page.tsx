// pages/blog/[id].tsx

import React from 'react'

interface Blog {
  id: number
  title: string
  content: string
}

const BlogDetail = ({ params }: { params: { id: number } }) => {
  // Fetch your blog data from an API or other source
  const blog: Blog = {
    id: params.id,
    title: 'Blog 1',
    content: 'Content for Blog 1'
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-600">{blog.content}</p>
    </div>
  )
}

export default BlogDetail
