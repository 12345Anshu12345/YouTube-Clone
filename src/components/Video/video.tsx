import { useState, useEffect } from 'react';
import './video.css';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
  };
}

function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'AIzaSyDiWRJakW5Ec4wedPNdfJJye3cDIMKRmBY';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=youtube&type=video&key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        setVideos(data.items);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="videos-container">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h3 className="video-title">{video.snippet.title}</h3>
            <p className="video-channel">{video.snippet.channelTitle}</p>
            <p className="video-description">{video.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;