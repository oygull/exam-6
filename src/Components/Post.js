import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import data from '../Data';
import Avatar from '@mui/material/Avatar';
import userImg from '../images/user-img.jpeg'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Comments from './Comments';
import Tooltip from '@mui/material/Tooltip';

function Post() {

  const[commentArr,setCommentArr]=useState(data[0].commentsArr);
  const[commentObj, setCommentObj]=useState({ 
  acc: 'Oygul Ibrokhimova',
  postedTime: 'now',
  commentsDesc: null,
  accImg:{userImg},
  rec: 0})
    const[postReac, setPostReac] = useState()
  const getValue=(e)=>{
      setCommentObj({ acc: 'Oygul Ibrokhimova',
      postedTime: 'now',
      commentsDesc: e.target.value,
      accImg:{userImg},
      rec: 0})
  }
  const submitValue=()=>{
    setCommentArr([commentObj,...commentArr])
  }
  const addReaction =(e)=>{
    setPostReac(e.target.textContent++);
  }
  let location = useLocation();
  return (
    <div className='post'>
      {data.map((el, i) => {
        if (el.id === +location.pathname.split("/").at(-1)) {
          return (
            <div key={i} className='post-inner'>
              <div className='post-header'>
                <div className='post-first-part'>
                  <img className='post-user-img' src={el.userImg} alt="userImg" />
                  <div className='user-info'>
                    <p className='user--name'>{el.user}</p>
                    <p className='post-par'>{el.data} <span> {el.read}</span> </p>
                  </div>
                </div>
              </div>
              <h1 className='post-title'>{el.title}</h1>
              <img className='main-post-img' src={el.imgSrc} alt="post-img" />
              <p className='post-description'>{el.desc}</p>
              <div className='post-comments'>
              <Tooltip title="+1" placement="top">
              <div  className='reactions'>
                  <i className='bx bxs-smile' ></i>
                  <p onClick={addReaction} className='reactions'> {el.reactions}</p>
                </div>
             </Tooltip>
               
                <div className='comments-modal'  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <i className='bx bxs-message-rounded-dots' ></i>
                  <p className='reactions'>{el.comments}</p>
                </div>
                <div>
                  <i className='bx bx-dots-horizontal-rounded' ></i>
                </div>
              </div>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">Responses</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div className='form-box'>
                        <div className='form-box-header'>
                           <Avatar alt="Remy Sharp" src={userImg} />
                             <p className='form-user-name'>Oygul Ibrokhimova</p>
                        </div>
                        <textarea onChange={getValue} className='comments-input' type="text" placeholder='What are your thoughts'/>
                        <div className='form-btns'>
                          <div>
                          <ToggleButton value="bold" aria-label="bold">
                            <FormatBoldIcon />
                          </ToggleButton>
                          <ToggleButton value="italic" aria-label="italic">
                            <FormatItalicIcon />
                          </ToggleButton>
                          </div>
                          <div>
                            <button className='form-btn-cancel'>Cancel</button>
                            <button onClick={submitValue} className='form-btn'>Respond</button>
                          </div>
                        </div>
                  </div>
                  <div className='chekbox'>
                  <FormControlLabel control={<Checkbox  />} label="Also publish to my profile" />
                  </div>
                  {
                    commentArr.map((item,i)=>{
                      return(
                        <Comments item={item} key={i}/>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Post