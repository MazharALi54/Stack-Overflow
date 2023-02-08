import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import stacklogo from '../../assets/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <img src={pen} alt="pen" width='18'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio, a inventore facere .</p>
      </div>
      <div className="right-sidebar-div-2">
        <img src={pen} alt="pen" width='18'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio.</p>
      </div>
      <h4>Featured on Meta</h4>
     
      <div className="right-sidebar-div-2">
        <img src={comment} alt="pen" width='18'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio.</p>
      </div>
      <div className="right-sidebar-div-2">
        <img src={stacklogo} alt="pen" width='18'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio.</p>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <p className='logo-num'>24</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio, a inventore facere .</p>
      </div>
      <div className="right-sidebar-div-2">
        <p className='logo-num'>14</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis ex optio, a inventore facere .</p>
      </div>
     
    </div>
  )
}

export default Widget