import React from 'react'
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'

export default function Footer () {
  return (
    <div style={{width: '100%'}}>
      <Typography style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '10', color: 'grey', backgroundColor: 'white' }}>This site uses javascript but will never track you. <a href="https://github.com/isand3r/isand3r.github.io" target="_blank">source</a></Typography>
      <BottomNavigation>
        <BottomNavigationAction label="Github" icon={<a style={{color: 'blue'}} href="https://github.com/isand3r" target="_blank"><GitHub /></a>} />
        <BottomNavigationAction label="LinkedIn" icon={<a style={{color: 'blue'}} href="https://www.linkedin.com/in/isaiah-thiessen" target="_blank"><LinkedIn /></a>} />
      </BottomNavigation>
    </div>
  )
}
