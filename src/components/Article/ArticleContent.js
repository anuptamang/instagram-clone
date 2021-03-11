import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import animVideoCover from 'assets/images/anim-screen.png'
import ArticleActivityPopup from 'components/User/Profile/ArticleActivityPopup'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor'
import ArticleCommentForm from './ArticleCommentForm'
import AuthorAvatar from './AuthorAvatar'
import AuthorHeader from './AuthorHeader'

const ArticleContent = ({
  article,
  isPlaying,
  isPlayingFirst,
  isRodalVisible,
  isPageVisible,
  playVideo,
  pauseVideo,
  setIsRodalVisible,
  hasVideo
}) => {
  let hrs
  const date = new Date()
  const now = Math.floor(date.getTime() / 1000)  

  return (
    <div className="article-holder">
      <div className="article-header relative flex items-center py-3 px-4">
        <AuthorAvatar
          article={article}
        />
        <h3 className="text-sm capitalize pl-3 font-medium relative">
          <AuthorHeader
            article={article}
          />
          <span className="block text-xs font-normal">
            {article.post.location && article.post.location}
          </span>
        </h3>
        <div
          onClick={() => setIsRodalVisible(true)}
          className="dots absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        >
          <MoreHorizIcon />
        </div>
      </div>
      <>
        {hasVideo ? (
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
                    playing={isPlaying && isPageVisible && isVisible && true}
                    url={article.post.postVideo}
                    loop
                  />
                </div>
              )}
            </VisibilitySensor>
          </div>
        ) : (
          <AliceCarousel
            disableDotsControls
            items={
              article.post.postImage &&
              article.post.postImage.map((image, i) => (
                <div
                  key={i}
                  className="img-holder h-96 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              ))
            }
          />
        )}
      </>
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
        <div className="likes-count text-sm pt-2">
          {article.post.postLikes} likes
        </div>
        <div className="comment text-sm py-1">
          <strong>{article.author[0].username}</strong> &nbsp;
          {article.post.postCaption}
        </div>
        <div className="comments-holder">
          {article.comments.map((comment, i) => (
            <div key={i} className="comment text-sm py-1">
              <strong>{comment.user[0].username}</strong> &nbsp;
              {comment.message}
            </div>
          ))}
        </div>
        <div className="posted-on text-xs text-gray-400 uppercase pt-2">
          {
            ((hrs = Math.floor((now - article.post.posted) / 3600)),
            hrs > 24 ? `${Math.floor(hrs / 24)} days ago` : `${hrs} hours ago`)
          }
        </div>
      </div>
      <div className="input-panel py-2 pr-12 pl-9 border-t border-gray-300 relative">
        <ArticleCommentForm article={article} />
      </div>
      <ArticleActivityPopup
        isVisible={isRodalVisible}
        setIsVisible={setIsRodalVisible}
      />
    </div>
  )
}

export default ArticleContent
