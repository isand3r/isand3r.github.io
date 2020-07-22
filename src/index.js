import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Body from './components/Body'
import Disclaimer from './components/Disclaimer'

const App = () => {
  return (
    <div>
      <Body />
      <div className='ui vertical placeholder segment center aligned'>Under Construction</div>
      <Footer />
      <Disclaimer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
