import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src='assets/person/1.jpeg' alt='' className='postProfile' />
            <span className='postUsername'>Bam Khatri</span>
            <span className='postDate'>5 min ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon className='postIcon' />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey! Its my first post</span>
          <img src='assets/post/1.jpeg' alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='assets/like.png' alt='' className='likeIcon' />
            <img src='assets/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>32 people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postComments'>10 Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
