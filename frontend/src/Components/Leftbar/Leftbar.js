import React from 'react'
import './Leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import GroupIcon from '@mui/icons-material/Group'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
import SchoolIcon from '@mui/icons-material/School'
const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='leftbarWrapper'>
        <ul className='leftbarList'>
          <li className='leftbarListItem'>
            <RssFeedIcon className='listIcon' />
            <span className='leftbarlistItemText'>Feed</span>
          </li>
          <li className='leftbarListItem'>
            <ChatIcon className='listIcon' />
            <span className='leftbarlistItemText'>Chat</span>
          </li>
          <li className='leftbarListItem'>
            <PlayCircleIcon className='listIcon' />
            <span className='leftbarlistItemText'>Videos</span>
          </li>
          <li className='leftbarListItem'>
            <GroupIcon className='listIcon' />
            <span className='leftbarlistItemText'>Group</span>
          </li>
          <li className='leftbarListItem'>
            <BookmarkIcon className='listIcon' />
            <span className='leftbarlistItemText'>Bookmark</span>
          </li>
          <li className='leftbarListItem'>
            <HelpOutlineOutlinedIcon className='listIcon' />
            <span className='leftbarlistItemText'>Questions</span>
          </li>
          <li className='leftbarListItem'>
            <WorkOutlineIcon className='listIcon' />
            <span className='leftbarlistItemText'>Jobs</span>
          </li>
          <li className='leftbarListItem'>
            <EventAvailableOutlinedIcon className='listIcon' />
            <span className='leftbarlistItemText'>Events</span>
          </li>
          <li className='leftbarListItem'>
            <SchoolIcon className='listIcon' />
            <span className='leftbarlistItemText'>Course</span>
          </li>
        </ul>
        <button className='leftbarButton'>Show More</button>
        <hr className='leftbarHr' />
        <ul className='leftbarFriendList'>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
          <li className='leftbarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='leftbarFriendImg'
            />
            <span className='friendName'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
