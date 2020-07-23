import React, { useState } from 'react'
import Blog from './Blog'
import About from './About'
import Home from './Home'

export default function Body () {
  const [active, setActive] = useState('home')
  const handleClick = (event) => {
    setActive(event.target.name)
  }
  return (
    <div>
      <div className='ui stackable menu borderless'>
        <a name='home' className={active === 'home' ? 'active item' : 'item'} onClick={handleClick}>Home</a>
        <a name='blog' className={active === 'blog' ? 'active item' : 'item'} active={active} onClick={handleClick}>Blog</a>
        <a name='about' className={active === 'about' ? 'active item' : 'item'} active={active} onClick={handleClick}>About</a>
        <a className='item right aligned' href='https://github.com/isand3r'>
          <i className='large icon github' />
        </a>
        <a className='item' href='https://www.linkedin.com/in/isaiah-thiessen'>
          <i className='large icon linkedin' />
        </a>
      </div>
      {active === 'home' ? <Home /> : undefined}
      {active === 'blog' ? <Blog /> : undefined}
      {active === 'about' ? <About /> : undefined}
    </div>
  )
}
