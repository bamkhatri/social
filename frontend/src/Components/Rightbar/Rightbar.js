import React from 'react'
import './Rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'
const Rightbar = ({ profile }) => {
  const Hompepage = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Abhishek Joshi </b>and <b>2 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src='assets/ad.png' alt='' className='rightbarAd' />
        <h4 className='rightbarTitleFriend'>Online Friends</h4>
        <ul className='friendList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Kathmandu</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Tikapur</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/1.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/2.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/3.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/4.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/5.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/6.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Cater</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <Hompepage />}
      </div>
    </div>
  )
}

export default Rightbar
