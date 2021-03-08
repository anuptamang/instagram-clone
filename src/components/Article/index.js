import React, { useState, useEffect, useRef } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import ArticleSkeleton from 'components/skeletons/ArticleSkeleton'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import './article.scss'
import ReactPlayer from 'react-player'
import animVideoCover from 'assets/images/anim-screen.png'
import { usePageVisibility } from 'react-page-visibility'
import VisibilitySensor from 'react-visibility-sensor'
import { ProfilePopup } from 'components/User/Profile/ProfilePopup'
import ArticleActivityPopup from 'components/User/Profile/ArticleActivityPopup'

function Article({isVideo}) {
  const [isLoading, setLoading] = useState(true) 
  const [isPlaying, setPlaying] = useState(false) 
  const [isPlayingFirst, setPlayingFirst] = useState(false) 
  const [isPopupActive, setPopupActive] = useState(false)
  const [delayHandler, setDelayHandler] = useState(null)
  const [isRodalVisible, setIsRodalVisible] = useState(false)

  const isPageVisible = usePageVisibility()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const playVideo = () => {
    setPlaying(true)
    setPlayingFirst(true)
  }

  const pauseVideo = () => {
    setPlaying(false)
  }

  const handlePopupOpen = () => {
    setDelayHandler(setTimeout(() => {
      setPopupActive(true)
    }, 500))
  }

  const handlePopupClose = () => {
    clearTimeout(delayHandler)
    setTimeout(() => {
      setPopupActive(false)      
    }, 500);
  }

  return (
    <div className="article border border-gray-300 rounded bg-white mb-14">
      {isLoading ? (
        <ArticleSkeleton />
      ) : (
        <>
          {isVideo ? (
            <div className="article-holder">
              <div className="article-header relative flex items-center py-3 px-4">
                <div
                  onMouseEnter={handlePopupOpen}
                  onMouseLeave={handlePopupClose}
                  className="img-avatar rounded-full p-0.5 border-2 border-pink-700 relative"
                >
                  <img
                    className="rounded-full block cursor-pointer"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="30"
                    height="30"
                    alt=""
                  />
                  {isPopupActive && <ProfilePopup />}
                </div>
                <h3 className="text-sm capitalize pl-3 font-medium">
                  Tina Bryant
                </h3>
                <div
                  onClick={() => setIsRodalVisible(true)}
                  className="dots absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="video-holder overflow-hidden relative h-96 w-full">
                {!isPlayingFirst && (
                  <div
                    className="img-holder bg-cover bg-center absolute top-0 left-0 w-full h-full z-20"
                    style={{
                      backgroundImage: `url(${animVideoCover})`,
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
                        playing={
                          isPlaying && isPageVisible && isVisible && true
                        }
                        url="/videos/anim1.mp4"
                        loop
                      />
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <div className="messages-panel p-3">
                <div className="top-panel flex justify-between">
                  <ul className="list-none flex items-center -ml-2">
                    <li className="px-2">
                      <FavoriteBorderIcon className="fill-current text-gray-700" />
                    </li>
                    <li className="px-2">
                      <ChatBubbleOutlineIcon className="fill-current text-gray-700" />
                    </li>
                    <li className="px-2">
                      <SendOutlinedIcon className="fill-current text-gray-700 transform -rotate-45 origin-top -ml-2" />
                    </li>
                  </ul>
                  <div className="save">
                    <BookmarkBorderOutlinedIcon className="fill-current text-gray-700" />
                  </div>
                </div>
                <div className="likes-count text-sm pt-2">122 likes</div>
                <div className="comments-holder pt-2">
                  <div className="comment text-sm py-1">
                    <strong>foodmandu</strong> We are super excited to announce
                    that we are coming soon to your city of history and culture!
                    🎊 We look forward to take care of all your cravings!
                  </div>
                  <div className="comment text-sm py-1">
                    <strong>Jon Doe</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis voluptates velit eligendi
                    ratione voluptatum.
                  </div>
                </div>
                <div className="posted-on text-xs text-gray-400 uppercase pt-2">
                  7 hours ago
                </div>
              </div>
              <div className="input-panel py-2 pr-12 pl-9 border-t border-gray-300 relative">
                <div className="emoji-holder absolute left-3 top-1/2 transform -translate-y-1/2">
                  <SentimentSatisfiedOutlinedIcon />
                </div>
                <input
                  className="w-full block bg-none border-none shadow-none outline-none focus:outline-none focus:shadow-none placeholder-gray-500 h-9 text-gray-600 text-sm focus:ring-0"
                  type="text"
                  placeholder="Add a comment..."
                />
                <div className="btn-holder text-blue-500 absolute right-3 top-1/2 transform -translate-y-1/2">
                  Post
                </div>
              </div>
              <ArticleActivityPopup
                isVisible={isRodalVisible}
                setIsVisible={setIsRodalVisible}
              />
            </div>
          ) : (
            <div className="article-holder">
              <div className="article-header relative flex items-center py-3 px-4">
                <div
                  onMouseEnter={handlePopupOpen}
                  onMouseLeave={handlePopupClose}
                  className="img-avatar rounded-full p-0.5 border-2 border-pink-700 relative"
                >
                  <img
                    className="rounded-full block cursor-pointer"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="30"
                    height="30"
                    alt=""
                  />
                  {isPopupActive && <ProfilePopup />}
                </div>
                <h3 className="text-sm capitalize pl-3 font-medium">
                  Tina Bryant
                </h3>
                <div
                  onClick={() => setIsRodalVisible(true)}
                  className="dots absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  <MoreHorizIcon />
                </div>
              </div>
              <div
                className="img-holder h-96 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://pbs.twimg.com/media/Eq0oISXUwAArLnp.jpg)`,
                }}
              ></div>
              <div className="messages-panel p-3">
                <div className="top-panel flex justify-between">
                  <ul className="list-none flex items-center -ml-2">
                    <li className="px-2">
                      <FavoriteBorderIcon className="fill-current text-gray-700" />
                    </li>
                    <li className="px-2">
                      <ChatBubbleOutlineIcon className="fill-current text-gray-700" />
                    </li>
                    <li className="px-2">
                      <SendOutlinedIcon className="fill-current text-gray-700 transform -rotate-45 origin-top -ml-2" />
                    </li>
                  </ul>
                  <div className="save">
                    <BookmarkBorderOutlinedIcon className="fill-current text-gray-700" />
                  </div>
                </div>
                <div className="likes-count text-sm pt-2">122 likes</div>
                <div className="comments-holder pt-2">
                  <div className="comment text-sm py-1">
                    <strong>foodmandu</strong> We are super excited to announce
                    that we are coming soon to your city of history and culture!
                    🎊 We look forward to take care of all your cravings!
                  </div>
                  <div className="comment text-sm py-1">
                    <strong>Jon Doe</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis voluptates velit eligendi
                    ratione voluptatum.
                  </div>
                </div>
                <div className="posted-on text-xs text-gray-400 uppercase pt-2">
                  7 hours ago
                </div>
              </div>
              <div className="input-panel py-2 pr-12 pl-9 border-t border-gray-300 relative">
                <div className="emoji-holder absolute left-3 top-1/2 transform -translate-y-1/2">
                  <SentimentSatisfiedOutlinedIcon />
                </div>
                <input
                  className="w-full block bg-none border-none shadow-none outline-none focus:outline-none focus:shadow-none placeholder-gray-500 h-9 text-gray-600 text-sm focus:ring-0"
                  type="text"
                  placeholder="Add a comment..."
                />
                <div className="btn-holder text-blue-500 absolute right-3 top-1/2 transform -translate-y-1/2">
                  Post
                </div>
              </div>
              <ArticleActivityPopup
                isVisible={isRodalVisible}
                setIsVisible={setIsRodalVisible}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Article
