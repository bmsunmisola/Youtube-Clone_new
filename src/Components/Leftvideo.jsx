import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileImg from '../assests/profile.jpg';

const API_KEY = 'AIzaSyDE_GmRBGkfwPIAwDFbZqdIl95x5fs-jug'; 

const Leftvideo = () => {
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

  if (!videoData) {
    return (
      <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
        Loading video...
      </div>
    );
  }

  const { snippet, statistics } = videoData;

  return (
    <div className="bodeylefta">
      <div className="bodeyleftainner">
        {/* Video Player */}
        <iframe
          className="vidoin"
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${videoid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* Video Caption & Channel Info */}
        <div className="cap">
          <h1>{snippet.title}</h1>
          <div className="capp">
            <div className="capppp">
              <img src={profileImg} alt="profile" className="cationimgg" />
            </div>
            <div className="Cpa">
              <div>
                <h3>{snippet.channelTitle}</h3>
                <p>{statistics.viewCount} views</p>
              </div>
              <div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="showmore">
          <div style={{ width: '95%' }}>
            {snippet.description}
          </div>
        </div>

        <div className="comments">
          <h2>4,187 Comments</h2>
          <div>
            <div className="cappppp">
              <img src={profileImg} alt="profile" className="cationimggg" />
              <input
                type="text"
                className="commentsin"
                placeholder="Add a comment..."
              />
            </div>

            {[1, 2, 3, 4].map((_, index) => (
              <div className="commmmm" key={index}>
                <img src={profileImg} alt="profile" className="cationimggg" />
                <div className="scre">
                  <h3>@randomuser — 2 days ago</h3>
                  <p>Great video! Learned a lot.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftvideo;
