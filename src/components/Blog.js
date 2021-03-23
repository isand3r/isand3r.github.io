import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'
import { withStyles } from '@material-ui/core'

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
})

function Blog (props) {
  const { classes } = props
  return (
    <div>
      <Header/>
      <div className={classes.toolbar}/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default withStyles(styles)(Blog)
