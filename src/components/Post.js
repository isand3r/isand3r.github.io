import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '1.8rem',
    fontStyle: 'bold',
    flexBasis: '80%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: '1.5rem',
    color: theme.palette.text.secondary,
  },
  paragraph: {
    fontSize: '1.5rem'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}))

function Post(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const tagColors = {
    link: "primary",
    post: "secondary",
    reading: "grey"
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  console.log(props)
  return (
    <Card className={classes.root}>
      <CardHeader 
        title={props.summary}
        subheader={props.date}/>
      <CardActions disableSpacing>
        {props.tags.map(tag => {
          return <Chip clickable color={tagColors[tag]} label={tag}/>
        })}
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.paragraph}>
            {props.details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Post
