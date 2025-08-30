import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import BodyLeft from './BodyLeft';

const API_KEY = 'AIzaSyAE1RGgFoKm9oPyjl6rinhdj70kHlAxy9Y';

const Videopage = () => {
  const { videoid } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoid}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideoData(data.items?.[0] || null);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    fetchVideoDetails();
  }, [videoid]);

  if (!videoData) return <p style={{ padding: '20px', color: 'white', background: 'black' }}>Loading...</p>;

  const { snippet, statistics } = videoData;

  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="App-body" style={{ display: 'flex' }}>
        <BodyLeft />
        <div
          style={{
            flex: 1,
            padding: '20px',
            background: 'black',
            color: 'white',
            overflowY: 'auto',
          }}
        >
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoid}`}
            frameBorder="0"
            allowFullScreen
            title={snippet?.title || 'Video'}
            style={{ borderRadius: '8px' }}
          ></iframe>

          <h2 style={{ marginTop: '15px', fontSize: '20px', fontWeight: 'bold' }}>{snippet?.title}</h2>
          <p style={{ margin: '10px 0', fontSize: '14px', opacity: 0.8 }}>{snippet?.description}</p>
          <p style={{ fontSize: '13px', opacity: 0.7 }}>
            Views: {statistics?.viewCount} • Likes: {statistics?.likeCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videopage;
