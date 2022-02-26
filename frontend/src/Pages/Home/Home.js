import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Toolbar from '../../Components/Toolbar/Toolbar'
import './Home.css'
const Home = () => {
  return (
    <>
      <Toolbar />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
