export interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
}

export interface VideoDetail extends Video {
    views: number;
    likes: number;
    dislikes: number;
    publishedAt: string;
    relatedVideos: Video[];
}