import React from 'react'
import '../Styles/Aside.css';
import data from '../Data';
import Authors from './Authors';

function Aside() {
  return (
    <div className='aside'>
      <button className='aside-btn'>Get unlimied access</button>
    <div className='search-box'>
      <span><i className='bx bx-search'></i></span>
      <input className='search-input' type='text' placeholder='Search'/>
    </div>
    <h3 className='aside-followers'>Who to follow</h3>
    {
      data.map((item,i)=>{
        return(
          <Authors 
          item={item}
           key={i}/>
        )
      })
    }
    </div>
  )
}

export default Aside