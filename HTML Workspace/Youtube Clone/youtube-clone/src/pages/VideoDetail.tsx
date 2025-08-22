import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { fetchVideoDetails } from '../services/api';
import { VideoDetail as VideoDetailType } from '../types';

const VideoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [videoDetail, setVideoDetail] = useState<VideoDetailType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVideoDetails = async () => {
            try {
                const data = await fetchVideoDetails(id);
                setVideoDetail(data);
            } catch (error) {
                console.error('Error fetching video details:', error);
            } finally {
                setLoading(false);
            }
        };

        getVideoDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!videoDetail) {
        return <div>Video not found</div>;
    }

    return (
        <div>
            <h1>{videoDetail.title}</h1>
            <VideoPlayer source={videoDetail.url} />
            <p>{videoDetail.description}</p>
            {/* Additional related videos can be rendered here */}
        </div>
    );
};

export default VideoDetail;