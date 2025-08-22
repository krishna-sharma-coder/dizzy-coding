import React, { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { fetchVideos } from '../services/api';

const Home: React.FC = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const loadVideos = async () => {
            const videoData = await fetchVideos();
            setVideos(videoData);
        };
        loadVideos();
    }, []);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="home">
            <h1>Video Library</h1>
            <div className="video-thumbnails">
                {videos.map((video) => (
                    <div key={video.id} className="video-thumbnail" onClick={() => handleVideoSelect(video)}>
                        <img src={video.thumbnailUrl} alt={video.title} />
                        <h2>{video.title}</h2>
                    </div>
                ))}
            </div>
            {selectedVideo && <VideoPlayer videoSource={selectedVideo.url} />}
        </div>
    );
};

export default Home;