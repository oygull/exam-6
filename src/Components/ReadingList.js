import React from 'react';
import Avatar from '@mui/material/Avatar';
import userImg from '../images/user-img.jpeg';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import data from '../Data';

const options = [
  'Show less like this',
  'Unfollow this author',
  'Report'
];

const ITEM_HEIGHT = 40;


function ReadingList() {

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className='reading-list-page'>
        <div className='reading-header'>
          <Avatar alt="Remy Sharp" src={userImg} />
          <div className='my-account-desc'>
                <p className='account-username'>Oygul Ibrokhimova</p>
                <p className='account-info'>May 30    3 stories</p>
          </div>
        </div>
        <h2 className='reading-title'>Reading List</h2>
        {
       data.map((el,i)=>{
         if(el.saved===true){
          return(
            <div key={i}>
                 <div className='posts-item'>
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
            <div className='posts-footer'>
    <div>
      <Chip label={el.category} />
      <p className='posts-p'>{el.read}</p>
      <p className='posts-par'>Selected for you</p>
    </div>
    <div className='post-btns'>
    <div>
    <Button
      id="fade-button"
      aria-controls={open2 ? 'fade-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open2 ? 'true' : undefined}
      onClick={handleClick2}
    >
   <i className='bx bxs-bookmark-star' ></i>
    </Button>
    <Menu
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
      anchorEl={anchorEl2}
      open={open2}
      onClose={handleClose2}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={handleClose2}>
         <FormControlLabel control={<Checkbox />} label="Reading List" />
      </MenuItem>
      <MenuItem onClick={handleClose2}>Create new list</MenuItem>
    </Menu>
    </div>
    <div>
    <IconButton
      aria-label="more"
      id="long-button"
      aria-controls={open ? 'long-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="true"
      onClick={handleClick}
    >
      <MoreVertIcon />
    </IconButton>
    <Menu
      id="long-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: '20ch',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
              </div>
              </div>
              </div>
              </div>
            </div>
          )
         }
        
          })
        }
    </div>
  )
}

export default ReadingList