import React from 'react'
import Avatar from '@mui/material/Avatar';

function Comments({item}) {
  return (
    <div className='comment'>
        <div className='comment-header'> 
           <Avatar alt="Remy Sharp" src={item.accImg} />
           <div className='comment-info'>
              <p className='comment-user'>{item.acc}</p>
              <p className='comment-data'>{item.postedTime}</p>
           </div>
        </div>
        <p className='comment-desc'>{item.commentsDesc}</p>
        <div className='comment-footer'>
            <p className='reactions'><i className='bx bx-smile'></i> {item.rec}</p>
            <button className='comment-btn'>Reply</button>
        </div>
    </div>
  )
}

export default Comments