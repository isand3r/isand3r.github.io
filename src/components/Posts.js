import React from 'react'
import Post from './Post'

const posts = [
  {
    title: 'Tamagochi hacker',
    body: <div> A colleague shared <a href="https://www.kickstarter.com/projects/flipper-devices/flipper-zero-tamagochi-for-hackers">this</a> with me yesterday.
It only took me a couple minutes to decide to back it. Feb 1st feels a long way away but I can't wait to test it out! </div>,
    date: 'July 31, 2020'
  },
  {
    title: '(Coming Soon) Generating Dataflow templates with Google Cloud Build',
    body: <div> A problem that recently came across my desk was how to automate generating Google Dataflow job templates using Cloud Build - the alternative being manually running scripts in cloud shell.</div>,
    date: 'tbd'
  }
]

export default function Posts () {
  return posts.map(post => {
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
