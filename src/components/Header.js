import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '1.8rem'
  }
}))

export default function Header () {
  const classes = useStyles()
  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.heading} variant="h6">
          IT's Blog
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
