import React from 'react'
import '../../App.css'
import LeftSidebar from '../../comonents/LeftSidebar/LeftSidebar'
import RightSidebar from '../../comonents/RightSidebar/RightSidebar'
import HomeMainbar from '../../comonents/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar/>
      </div>
      <div className="home-container-2">
        <HomeMainbar/>
      </div>
      <div className="home-container-3">
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home