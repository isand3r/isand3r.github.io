import React from 'react'

const posts = [
  {
    title: 'First post!',
    body: 'This is a test blog post!',
    date: 'July 22 2020'
  },
  {
    title: 'Tamagochi',
    body: `A colleague shared this with me yesterday: https://www.kickstarter.com/projects/flipper-devices/flipper-zero-tamagochi-for-hackers.
It only took me a couple minutes to decide to back it. Feb 1st feels a long way away but I can't wait to test it out!
`,
    date: 'July 31, 2020'
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
