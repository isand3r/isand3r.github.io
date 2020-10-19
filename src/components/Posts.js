import React from 'react'
import Post from './Post'
import posts from '../content/posts'

const content = posts()

export default function Posts () {
  return content.map(post => {
    return (
      <Post
        key={post.date}
        summary={post.title}
        details={post.body}
        date={post.date}
        />
    )
  })
}
