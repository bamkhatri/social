import React from 'react'
import './Rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'
const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Abhishek Joshi </b>and <b>2 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src='assets/ad.png' alt='' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='friendList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
