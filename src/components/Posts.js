import React from 'react'

const posts = [
  {
    title: 'First post!',
    body: 'This is a test blog post!',
    date: 'July 22 2020'
  }
]

export default function Posts () {
  return posts.map(post => {
    return (
      <div className='ui segment secondary' key={post.date}>
        <div className='ui header medium'>
          {post.title}
        </div>
        <div className=''>
          {post.body}
        </div>
        <div className='ui header tiny'> {post.date} </div>
      </div>
    )
  })
}
