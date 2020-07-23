import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Body from './components/Body'

const App = () => {
  return (
    <div>
      <Body />
      <div style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
        <Footer />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
