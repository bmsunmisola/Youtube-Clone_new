import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { get_popular_videos, search_videos } from '../Apis/Api'; 

const Bodyright = ({ searchQuery }) => {
  const [vids, setVids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const categories = [
    "All", "Music", "Nollywood", "Cartoons", "Trending",
    "Naruto", "Podcasts", "Contemporary Worship Music",
    "Live", "Dramedy", "Couples"
  ];

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = searchQuery
          ? await search_videos(searchQuery) 
          : await get_popular_videos(); 

        const items = Array.isArray(response)
          ? response
          : response?.items || [];

        if (!cancelled) setVids(items);
      } catch (e) {
        if (!cancelled) setErr(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, [searchQuery]); 

  if (loading) return <div className="right-body"><div className="innerRightBody">Loading…</div></div>;
  if (err) return <div className="right-body"><div className="innerRightBody">Failed to load videos.</div></div>;

  return (
    <div className="right-body">
      <div className="innerRightBody">
        <div className="rightBodyHead">
          {categories.map((cat, index) => (
            <button key={index} className={index === 0 ? 'select' : ''}>
              <b>{cat}</b>
            </button>
          ))}
        </div>

        <div className="video-content">
          {vids.map((video) => {
            const id = video?.id?.videoId || video?.id;
            if (!id) return null;

            const thumb = video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.medium?.url;
            const title = video?.snippet?.title || 'Untitled';
            const channelTitle = video?.snippet?.channelTitle || 'Unknown channel';
            const when = video?.snippet?.publishedAt;

            return (
              <Link key={id} to={`/video/${id}`} style={{ textDecoration: 'none' }}>
                <div className="rightBodyContent">
                  <img src={thumb} alt={title} className="bodyVideo" />
                  <div className="Captionn">
                    <img src={thumb} alt={`${channelTitle} avatar`} className="cationimg" />
                    <div className="video-info">
                      <h4>{title.slice(0, 70)}</h4>
                      <p>{channelTitle}</p>
                      {when && <p>345k • {moment(when).fromNow()}</p>}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bodyright;
