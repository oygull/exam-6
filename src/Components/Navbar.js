import React,{useState} from 'react';
import '../Styles/Navbar.css';
import logo from '../images/logo.png'
import userImg from '../images/user-img.jpeg'
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Link, NavLink } from 'react-router-dom';



function Navbar() {


  return (
    <div className='navbar'>
      <div className='navbae-logobox'>
      <Link to="/"> <img className="navbar-logo" src={logo}/></Link>
      </div>
      <ul className='nav-list'>
            <Tooltip  title="Home" placement="right">
              <NavLink to="/">
                <li className='nav-item'><i className='bx bx-home'></i></li>
                </NavLink>
            </Tooltip>
            <Tooltip title="Notifications" placement="right">
              <NavLink to="/notifications">
                <li className='nav-item'><i className='bx bx-bell' ></i></li>
                 </NavLink>
            </Tooltip>
            <Tooltip title="Lists" placement="right">
              <NavLink to="/list" >
                <li className='nav-item'><i className='bx bx-bookmarks'></i></li>
                </NavLink>
            </Tooltip>
            <Tooltip title="Stories" placement="right">
              <NavLink to="/stories">
                <li className='nav-item'><i className='bx bx-detail'></i></li>
                </NavLink>
            </Tooltip>
            <Tooltip title="Write" placement="right">
              <NavLink to="/write"> 
              <li className='nav-item'><i className='bx bxs-edit' ></i></li>
              </NavLink>
            </Tooltip>
      </ul>
  
        <div className='user'>
          <Link to='/signup'>
             <Avatar alt="Remy Sharp" src={userImg} />
          </Link>
         
        </div>
    </div>
  )
}

export default Navbar