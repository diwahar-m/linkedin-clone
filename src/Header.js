import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className="header">
      <div className='header__left'>
        <LinkedInIcon sx={{fontSize:'40px'}} color="primary"/>
        <div className='header__search'>
            <SearchIcon />
            <input type="text" />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleAltIcon}  title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon}  title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption Avatar={AccountCircleIcon} title="profile" />
      </div>
    </div>
  )
}

export default Header
