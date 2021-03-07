import React from 'react'
export default function posts () {
  return [
    {
      title: 'Tamagochi hacker',
      body: <div> A colleague shared <a href="https://www.kickstarter.com/projects/flipper-devices/flipper-zero-tamagochi-for-hackers">this</a> with me yesterday.
  It only took me a couple minutes to decide to back it. Feb 1st feels a long way away but I can't wait to test it out! </div>,
      date: 'July 31, 2020'
    },
    {
      title: 'Dataflow templates & Google Cloud Build',
      body: <div> A problem that came across my desk recently was how to automate generating & deploying Dataflow job templates using Cloud Build - the alternative being manually running scripts in cloud shell. My next post will explore the solution I came up with.</div>,
      date: 'coming soon'
    }
  ]
}
