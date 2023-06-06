import React from 'react';
import VideoImage from '../../assets/video_image.png';

const VideoItem = (props) => {
    const handleOpenModalVideo = () => {
        props.setModalShow(true);
        props.setVideoModal(props.video);
    }

    return (
        <div style={{ width: '200px' }}>
            <div 
                role="button"
                onClick={() => handleOpenModalVideo()}
            >
                <img src={VideoImage}
                    className="object-fit-cover rounded border border-1 border-secondary"
                    style={{
                        height: '120px',
                        width: '100%'
                    }}
                    alt="course"
                />
            </div>
            <div className="mt-1">
                <p className="text-center">説明ビデオ</p>
            </div>
        </div>
    )
}

export default VideoItem