import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Subscriptions, YoutubeMusic, History, Playlist, 
  Yourvideos, LikedVideos, Downloads, Trending, Musics, 
  Gaming, News, Sports, Shorts 
} from '../assests/svgElements';

const BodyLeft = () => {
  const menuItems = [
    { id: 1, name: 'Home', icon: <Home />, path: '/' }, // Added path for Home
    { id: 2, name: 'Short', icon: <Shorts /> },
    { id: 3, name: 'Subscription', icon: <Subscriptions /> },
    { id: 4, name: 'Youtube Music', icon: <YoutubeMusic /> },
  ];

  const menuItemss = [
    { id: 1, name: 'History', icon: <History /> },
    { id: 2, name: 'Playlist', icon: <Playlist /> },
    { id: 3, name: 'Watch Later', icon: <Yourvideos /> },
    { id: 4, name: 'Liked Videos', icon: <LikedVideos /> },
    { id: 5, name: 'Downloads', icon: <Downloads /> },
  ];

  const menuItemsss = [
    { id: 1, name: 'Parker burton' },
    { id: 2, name: 'Tion Wayn' },
    { id: 3, name: 'Russ million' },
    { id: 4, name: 'React Code' },
    { id: 5, name: 'Spring Microservices' },
  ];

  const menuItemssa = [
    { id: 1, name: 'Trending', icon: <Trending /> },
    { id: 2, name: 'Music', icon: <Musics /> },
    { id: 3, name: 'Gaming', icon: <Gaming /> },
    { id: 4, name: 'News', icon: <News /> },
    { id: 5, name: 'Sports', icon: <Sports /> },
  ];

  return (
    <div className='left-body'>
      <div className='innerLeft'>
        {menuItems.map((item) => (
          <div className='hei' key={item.id}>
            {item.name === 'Home' ? (
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='height'>
                  {item.icon}
                  <p className='sty'>{item.name}</p>
                </div>
              </Link>
            ) : (
              <div className='height'>
                {item.icon}
                <p className='sty'>{item.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{ paddingTop: 12, paddingBottom: 12 }}>You</h2>
        {menuItemss.map((item) => (
          <div className='hei' key={item.id}>
            <div className='height'>
              {item.icon}
              <p className='sty'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{ paddingTop: 12, paddingBottom: 12 }}>Subscription</h2>
        {menuItemsss.map((item) => (
          <div className='hei' key={item.id}>
            <div className='height'>
              <p className='sty'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='innerLeft'>
        <h2 style={{ paddingTop: 12, paddingBottom: 12 }}>Explore</h2>
        {menuItemssa.map((item) => (
          <div className='hei' key={item.id}>
            <div className='height'>
              {item.icon}
              <p className='sty'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyLeft;