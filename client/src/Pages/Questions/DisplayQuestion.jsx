import React from 'react'
import LeftSidebar from '../../comonents/LeftSidebar/LeftSidebar'
import RightSidebar from '../../comonents/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container'>
      <div className='home-container-1'>
        <LeftSidebar/>
      </div>
      <div className="home-container-2">
        <QuestionDetails/>
      </div>
      <div className="home-container-3">
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion