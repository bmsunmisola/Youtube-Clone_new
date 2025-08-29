import React from 'react';
import menu from '../assests/menu.png';
import logo from '../assests/logo.png';
import Search from '../assests/Search-icon.png';
import mic from '../assests/mic.png';
import add from '../assests/add.png';
import notification from '../assests/notification.png';
import profile from '../assests/profile.jpg';

const Header = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value); // updates search query live
  };

  return (
    <div className='header-conatiner'>
      <div className="Header-wrapper">
        <div className="leftHeader">
          <img src={menu} alt="" className='img-meni' />
          <img src={logo} alt="" />
        </div>

        <div className="header-middle">
          <div className='search-bar'>
            <input
              type="text"
              className='s-bar'
              placeholder='Search'
              onChange={handleInputChange}
            />
            <img src={Search} alt="" className='search-icon' />
          </div>
          <div className="mic-icon">
            <img src={mic} alt="" className='mic-iconc' />
          </div>
        </div>

        <div className="header-right">
          <div className="Create">
            <img src={add} alt="" className='mic-iconc' />
            <p>Create</p>
          </div>
          <img src={notification} alt="" className='mic-iconc'/>
          <img src={profile} alt="" className='profile' />
        </div>
      </div>
    </div>
  );
};

export default Header;
