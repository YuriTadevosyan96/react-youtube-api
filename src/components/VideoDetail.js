import React from "react";

function VideoDetail({ video }) {
    const videoSourse = `https://www.youtube.com/embed/${video ? video.id.videoId : ""}`;
    const videoTitle = video ? video.snippet.title : "";
    const videoDescription = video ? video.snippet.description : "";

    return (
        video && (
            <div>
                <div className="ui embed">
                    <iframe src={videoSourse} title={videoTitle}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{videoTitle}</h4>
                    <p>{videoDescription}</p>
                </div>
            </div>
        )
    );
}

export default VideoDetail;
