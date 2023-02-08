import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to="/" className="side-nav-links" activeclassname="active">
          <p className="home">HOME</p>
        </NavLink>
        <div className="side-nav-div">
            <div><p className="public">PUBLIC</p></div>
            <NavLink to='/Questions' className="side-nav-links" activeclassname="active">
              <img></img>
              <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className="side-nav-links" activeclassname="active">
              <p style={{paddingLeft:"10px"}}>Tags</p>
            </NavLink>
            <NavLink to='/Users' className="side-nav-links" activeclassname="active">
              <p style={{paddingLeft:"10px"}}>Users</p>
            </NavLink>
          </div>
      </nav>    
    </div>
  )
}

export default LeftSidebar