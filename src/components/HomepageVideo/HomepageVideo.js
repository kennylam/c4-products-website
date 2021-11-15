/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from 'react';
import { uniqueId } from 'lodash';
import { homepageVideoWrapper } from './HomepageVideo.module.scss';
import mp4 from './chart.mp4';

const HomepageVideo = () => {
  const videoId = uniqueId('homepage-video-');
  const videoRef = useRef();

  return (
    <div className={homepageVideoWrapper}>
      <video id={videoId} ref={videoRef} muted autoPlay playsInline>
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomepageVideo;
