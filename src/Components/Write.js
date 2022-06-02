import React from 'react';
import userImg from '../images/user-img.jpeg'

function Write({setPostObj,setPostArr,postObj,postArr}) {

  const getPostValue=(e)=>{
    if(e.target.id==='titleInput'){
      setPostObj({   user: 'Oygul Ibrokhimova',
      data: 'today',
      desc: null,
      accImg:{userImg},
      title: e.target.value})
    }
    else if(e.target.id==='textInput'){
      setPostObj({   user: 'Oygul Ibrokhimova',
      data: 'today',
      desc: null,
      accImg:{userImg},
      desc: e.target.value})
     }
  }
  const submitPostValue=()=>{
    setPostArr([postObj,...postArr])
    console.log(postArr);
  }

  return (
    <div className='write'>
      <div className='write-header'>
        <h2 className='post-write-title'>Oygul Ibrokhimova</h2>
        <button onClick={submitPostValue} className='write-btn'>Publish</button>
      </div>
      
        <div className='post-input'>
          <div className='input-box'>
          <input id='titleInput' onChange={getPostValue} className='title-input' type="text" placeholder='Title' />
          </div>
       <div className='input-box-text'>
       <input id='textInput'  onChange={getPostValue} className='text-input' type="text" placeholder='Tell your story'/>
       </div>
        </div>
    </div>  
    
  )
}

export default Write