/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react';
import { uniqueId } from 'lodash';
import ToggleIcon from './ToggleIcon';
import { homepageVideoMain, homepageVideoWrapper, homepageVideoControls } from './HomepageVideo.module.scss';

import mp4 from './homepage.mp4';
// import poster from './poster.png';

const HomepageVideo = () => {
  const videoId = uniqueId('homepage-video-');
  const videoRef = useRef();
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const onClick = () => {
    if (videoRef.current) {
      if (paused) {
        setPaused(false);
        videoRef.current.play();
      } else {
        setPaused(true);
        videoRef.current.pause();
      }
    }
  };

  // const { children } = this.props;

  return (
    <div className={homepageVideoMain}>
      <div className={homepageVideoWrapper}>
        <video id={videoId} ref={videoRef} muted autoPlay playsInline loop>
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <button
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        aria-label="play pause toggle"
        aria-controls={videoId}
        className={homepageVideoControls}
        onClick={onClick}>
        <ToggleIcon hovering={hovering} paused={paused} />
      </button>
    </div>
  );
};

export default HomepageVideo;
