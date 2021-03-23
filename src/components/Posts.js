import React from 'react'
import Post from './Post'
import posts from '../content/posts'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Typography from '@material-ui/core/Typography'

const content = posts()
const useStyles = makeStyles((theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  date: {
    textAlign: "left"
  },
  post: {
    width: '90'
  }
}))

export default function Posts () {
  const classes = useStyles()
  return (
    <Timeline align="right">
      {content.map(post => {
        return (
          <TimelineItem>
            <TimelineContent style={{ flex: 0.1 }}>
              <Typography variant="body2" style={{ color: 'grey'}} className={classes.date}>
                {post.date}
              </Typography>
            </TimelineContent>
              <TimelineSeparator>
                <TimelineDot color="primary"/>
                <TimelineConnector color="secondary"/>
            </TimelineSeparator>
            <TimelineOppositeContent>
              <Post
                key={post.date}
                summary={post.title}
                details={post.body}
                date={post.date}
                tags={post.tags}
                />
            </TimelineOppositeContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
