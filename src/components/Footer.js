import React from 'react'
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'


export default function Footer () {
  return (
    <BottomNavigation style={{width: '100%', position: 'fixed', bottom: 0}}>
      <BottomNavigationAction>
        <Typography style={{ fontStyle: 'italic', fontSize: '10'}}>This site uses javascript but will never track you.</Typography>
      </BottomNavigationAction>
      <BottomNavigationAction label="Github" icon={<a style={{color: 'blue'}} href="https://github.com/isand3r"><GitHub /></a>} />
      <BottomNavigationAction label="LinkedIn" icon={<a style={{color: 'blue'}} href="https://www.linkedin.com/in/isaiah-thiessen"><LinkedIn /></a>} />
    </BottomNavigation>
  )
}