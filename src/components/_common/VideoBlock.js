import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import { usePageVisibility } from 'react-page-visibility'

const VideoBlock = (props) => {
  const [isPlaying, setPlaying] = useState(false)
  const [isPlayingFirst, setPlayingFirst] = useState(false)
  const isPageVisible = usePageVisibility()

  const playVideo = () => {
    setPlaying(true)
    setPlayingFirst(true)
  }

  const pauseVideo = () => {
    setPlaying(false)
  } 

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0">
        {!isPlayingFirst && (
          <div
            className="img-holder bg-cover bg-center absolute top-0 left-0 w-full h-full z-20"
            style={{
              backgroundImage: `url(${
                props.postVideoCover
                  ? props.postVideoCover
                  : props.animVideoCover
              })`,
            }}
          ></div>
        )}
        {!isPlaying && (
          <>
            <button
              onClick={playVideo}
              className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-20 text-white focus:outline-none opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <PlayArrowRoundedIcon />
            </button>
          </>
        )}
        <VisibilitySensor>
          {({ isVisible }) => (
            <div className="video" onClick={pauseVideo}>
              <ReactPlayer
                playing={isPlaying && isPageVisible && isVisible && true}
                url={props.postVideoUrl}
                loop
              />
            </div>
          )}
        </VisibilitySensor>
      </div>
    </>
  )
}

export default VideoBlock
