import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Icon} from 'react-materialize'
// import Talk from './talktome'

export default function CustomNav() {
  return (
    <div>
      <Navbar 
  alignLinks="right"
  brand={<a className="brand-logo black-text " href="/">Eniola Ajala</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  fixed={true}
  className="black-text fixed z-depth-0"
>
  <NavLink to='/' className="black-text">
    Home
  </NavLink>
  <a className="black-text" href="#myBio"> My Bio</a>
  <a className="black-text" href="#personalBranding"> Personal Brand</a>
  <a className="black-text" href="#sample"> My Works</a>
  <a className="black-text" href="#contact"> Contact </a>
  {/* <NavLink className="black-text" to='/talktome'> */}
    {/* Hire Me */}
  {/* </NavLink> */}
</Navbar>
      
    </div>
  )
}


