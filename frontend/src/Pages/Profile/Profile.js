import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Toolbar from '../../Components/Toolbar/Toolbar'
import './Profile.css'
const Profile = () => {
  return (
    <>
      <Toolbar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImage'
                src='assets/post/3.jpeg'
                alt=''
              />
              <img
                className='profileUserImage'
                src='assets/person/7.jpeg'
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Bam Khatri</h4>
              <span className='profileInfoDesc'>Hello My Friend</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
