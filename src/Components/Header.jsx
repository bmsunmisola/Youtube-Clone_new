import React, { useState, useEffect } from 'react';
import logo from '../assests/logo.png';
import Search from '../assests/Search-icon.png';
import mic from '../assests/mic.png';
import add from '../assests/add.png';
import notification from '../assests/notification.png';
import profile from '../assests/profile.jpg'; // Restored

const Header = ({ onSearch }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (query.trim()) {
      onSearch(query);
    }
    setSearchOpen(false);
  };

  return (
    <div className="header-conatiner">
      <div className="Header-wrapper">
        
        <div className="leftHeader">
          <img src={logo} alt="YouTube" className="logo" />
        </div>

        {/* MIDDLE (Desktop/Tablets Only) */}
        {!isMobile && (
          <div className="header-middle">
            <div className="search-bar">
              <input
                type="text"
                className="s-bar"
                placeholder="Search"
                onChange={handleInputChange}
              />
              <img src={Search} alt="Search" className="search-icon" />
            </div>
            <div className="mic-icon">
              <img src={mic} alt="Mic" className="mic-iconc" />
            </div>
          </div>
        )}

        {/* RIGHT SIDE: Adaptive */}
        <div className="header-right">
          {isMobile ? (
            <>
              {searchOpen ? (
                <div className="search-bar collapsed">
                  <input
                    type="text"
                    className="s-bar"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                    autoFocus
                  />
                  <button className="icon-btn" onClick={handleSearchSubmit}>
                    <img src={Search} alt="Search" className="search-icon" />
                  </button>
                  <button
                    className="icon-btn close-btn"
                    onClick={() => setSearchOpen(false)}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="icon-btn"
                    onClick={() => setSearchOpen(true)}
                    aria-label="Open search"
                  >
                    <img src={Search} alt="Search" className="search-icon" />
                  </button>
                  <button className="icon-btn">
                    <img src={mic} alt="Mic" className="mic-iconc" />
                  </button>
                  <button className="icon-btn">
                    <img src={add} alt="Create" className="mic-iconc" />
                  </button>
                  <button className="icon-btn">
                    <img src={notification} alt="Notifications" className="mic-iconc" />
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <div className="Create">
                <img src={add} alt="Create" className="mic-iconc" />
                <p>Create</p>
              </div>
              <img src={notification} alt="Notifications" className="mic-iconc" />
              <img src={profile} alt="Profile" className="profile" /> {/* Restored */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
