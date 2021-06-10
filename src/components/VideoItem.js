import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
    const videoImage = video.snippet.thumbnails.medium.url;
    const videoTitle = video.snippet.title;

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img src={videoImage} alt={videoTitle} className="ui image" />
            <div className="content">
                <div className="header">{videoTitle}</div>
            </div>
        </div>
    );
}

export default VideoItem;
