import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchVideos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/videos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        throw error;
    }
};

export const fetchVideoDetails = async (videoId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/videos/${videoId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching video details:', error);
        throw error;
    }
};