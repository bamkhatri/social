import React from 'react'
import './Friends.css'
const Friends = ({ user }) => {
  return (
    <li className='leftbarFriend'>
      <img src={user.profilePicture} alt='' className='leftbarFriendImg' />
      <span className='friendName'>{user.username}</span>
    </li>
  )
}

export default Friends
