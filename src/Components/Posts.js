import React, {useState} from 'react'
import '../Styles/Main.css';
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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const options = [
  'Show less like this',
  'Unfollow this author',
  'Report'
];

const ITEM_HEIGHT = 40;

function Posts({el}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };



  const savePost=(idx)=>{

   data.map((el)=>{
        if(idx===el.id){
          if(el.saved===true){
              el.saved=false  
          }
         if(el.saved===false){
               el.saved=true
          }
        }
    })
   
  
  }
  return (
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
        
      <div onClick={()=>{savePost(el.id)}}>
      <Button
        id="fade-button"
        onClick={handleClick2}
      >
        
        <i  className={el.saved ?  'bx bxs-bookmark-star' : 'bx bx-bookmark' }   ></i>
        
      
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleCloseModal}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClickOpenModal}>
           <FormControlLabel control={<Checkbox checked/>} label="Reading List" />
        </MenuItem>
        <MenuItem onClick={handleClose2}>
        <div>
      <Button variant="outlined" onClick={handleClickOpenModal}>
       Create new list
      </Button>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleCloseModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
        </MenuItem>
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
  )
}

export default Posts

