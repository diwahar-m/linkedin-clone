import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Sidebar.css';

const Sidebar = () => {

  const recentItem = (topic)=> 
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://webneel.com/daily/sites/default/files/images/daily/04-2013/19-vibrant-color-photography.jpg" alt=""/>
        <AccountCircleIcon />
        <h2>Madhan Kumar</h2>
        <h4>madhan@mailinator.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who view you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Who view you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
