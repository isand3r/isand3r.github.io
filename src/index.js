import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './components/Blog'

/*
 * TODO:
 * - Create my own material-ui theme + branding
 */

const App = () => {
  return (
    <Blog/>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
