import React from 'react';
import { Container, Embed } from 'semantic-ui-react';

const VideoList = ({videos}) => {


    return(
        <div className="container">
            {videos.map((video, index) => {
                return (
                    <Video
                        key={video.id}
                        video = {video}
                        sel = {index % 2 === 0 ? 'odd' : 'even'}
                    />            
                );
                })}
        </div>
    );
}

const Video = ( {video,sel} ) => {

    return(
        <Container className="video">
                <h3 className="video__title">{video.snippet.title}</h3>
                <div className={`video__decoration video__decoration-${sel}`}></div>
                <Embed 
                className={`video__frame `}
                icon=""
                aspectRatio='16:9'
                source="youtube" 
                id={video.snippet.resourceId.videoId}
                placeholder='https://hillmanfamilyfoundations.org/wp-content/uploads/2018/03/video-placeholder.jpg'
                />

                <a className="video__link" rel="noreferrer" target="_blank" href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}>Open in youtube</a> &#8594;
        </Container>
    );
}

export default VideoList;