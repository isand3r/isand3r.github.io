import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
  }
}))

function Post(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{props.summary}</Typography>
        <Typography className={classes.secondaryHeading}>{props.date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.paragraph}>
          {props.details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Post
