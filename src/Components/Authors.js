import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Authors({item}) {
  return (
    <Link className='list-link' to={`/post/${item.id}`}>
    <div className='authors'>
      <Avatar alt="Remy Sharp" src={item.userImg} />
      <div className='author-desc'>
        <h4>{item.user}</h4>
        <p className='author-par'>{item.title}</p>
      </div>
      <button className='author-btn'>Follow</button>
    </div>
    </Link>
  )
}

export default Authors