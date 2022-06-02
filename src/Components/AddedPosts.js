import React from 'react';
import { Link } from 'react-router-dom';

function AddedPosts({el}) {
  return (
    <div>
             <Link className='list-link' to={`/post/${el.id}`}>
        <div >
  <div className='posts-item-inner'>
      <div className='posts-inner'>
      <div className='accaunt-desc'>
        <img className='account-img' src={el.userImg} alt="userImg" />
        <p className='user-name'>{el.user}</p>
        <p className='user-data'>{el.data}</p>
      </div>
      <h3 className='posts-tilte'>{el.title}</h3>
      <p className='posts-desc'>{el.desc}</p>
      </div>
      <div className='posts-imgBox'>
        <img className='post-img' src={el.imgSrc} alt="imgSrc" />
      </div>
    </div>
        </div>
    </Link>
    </div>
  )
}

export default AddedPosts