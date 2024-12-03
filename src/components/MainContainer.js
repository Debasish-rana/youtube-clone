import React from 'react'
import Navbar from './Sidebar'
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className='flex'>
      <Navbar/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
