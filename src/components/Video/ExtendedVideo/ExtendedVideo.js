import { Play32, Pause32 } from "@carbon/icons-react";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withPrefix } from "gatsby";
import {
  video,
  videoButton,
  videoContainer,
  vimeo,
  videoIsPlaying,
} from "./extended-video.module.scss";
import usePathPrefix from "../util/hooks/usePathPrefix";

export const ExtendedVideo = ({
  autoPlay,
  vimeoId,
  title,
  src,
  poster,
  uStreamId,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  const buttonClassName = cx(videoButton, {
    [videoIsPlaying]: isPlaying,
  });
  const pathPrefix = usePathPrefix();
  const srcContainsPrefix = pathPrefix && src && src.includes(pathPrefix);
  const fixedSrc = srcContainsPrefix ? src : withPrefix(src);

  if (vimeoId) {
    return (
      <div className={videoContainer}>
        <div className={cx(video, vimeo)}>
          <div className="embedVideo-container">
            <iframe
              allow="autoplay"
              title={title}
              src={`https://player.vimeo.com/video/${vimeoId}`}
              ref={iframeRef}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  if (uStreamId) {
    return (
      <div className={videoContainer}>
        <div className={cx(video, vimeo)}>
          <div className="embedVideo-container">
            <iframe
              allow="autoplay"
              title={title}
              src={`https://www.ustream.tv/embed/${uStreamId}`}
              ref={iframeRef}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  function onClick(e) {
    e.stopPropagation();
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      return;
    }

    return videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onEnded() {
    setIsPlaying(false);
  }

  function onKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        return;
      }
      return videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className={videoContainer}>
      <div
        className={buttonClassName}
        role="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex="0"
      >
        {isPlaying ? <Pause32 /> : <Play32 />}
        <span className="bx--assistive-text">
          {isPlaying ? "Pause" : "Play"}
        </span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay={autoPlay}
        className={video}
        type="video/mp4"
        ref={videoRef}
        onEnded={onEnded}
        src={fixedSrc}
        poster={withPrefix(poster)}
        {...props}
      />
    </div>
  );
};

ExtendedVideo.propTypes = {
  autoPlay: PropTypes.bool,
  vimeoId: PropTypes.string,
  children: PropTypes.element,
  src: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  videoSourceValidator: (props) => {
    if (!props.vimeoId && !props.src) {
      return new Error(
        `The Video component requires either a 'vimeoId' Or a 'src' prop`
      );
    }
    if (props.vimeoId && props.src) {
      return new Error(
        `You can only specify one source for the Video component. Use either the 'vimeoId' OR the 'src' prop.`
      );
    }
    if (props.vimeoId && props.poster) {
      return new Error(
        `You can't specify a poster for vimeo videos. You can control the poster image from the Vimeo control panel`
      );
    }
    if (props.vimeoId && props.children) {
      return new Error(
        `You can't specify children/tracks for vimeo videos. You can control the captions from the Vimeo control panel`
      );
    }
  },
};

ExtendedVideo.defaultProps = {
  autoPlay: false,
};