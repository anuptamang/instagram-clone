import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ArticleActivityPopup from 'components/User/Profile/ArticleActivityPopup'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import animVideoCover from 'assets/images/anim-screen.png'
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor'
import ArticleCommentForm from './ArticleCommentForm'
import AuthorAvatar from './AuthorAvatar'
import AuthorHeader from './AuthorHeader'
import FavoriteIcon from '@material-ui/icons/Favorite'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ArticleComment from './ArticleComment'
import UserNameDropdown from './UserNameDropdown'
import db from 'fb/firebase'
import { DB } from 'context/UserContext'
import VideoBlock from 'components/_common/VideoBlock'

const ArticleContent = ({
  article,
  isRodalVisible,
  setIsRodalVisible,
  hasVideo
}) => {
  let hrs, timer
  const date = new Date()
  const now = Math.floor(date.getTime() / 1000)  
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(article.post.postLikes)
  const [isClicked, setIsClicked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [checker, setChecker] = useState('')
  const dbContext = DB()

  useEffect(() => {
    db.collection('postLikes').onSnapshot((snapshot) => {
      setChecker(snapshot.docs.map((doc) => doc.data().postId))
    })
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)

    if(!isLiked) {
      if (!checker.includes(article.postId && dbContext.user.userId)) {
        setLikeCount(article.post.postLikes + 1)
        db.collection('postLikes').add({
          postId: article.postId,
          userId: dbContext.user.userId,
        })
      }

    } else {
      if (checker.includes(article.postId)) {
        setLikeCount(article.post.postLikes - 1)
        // db.collection('postLikes').doc('id').delete()
      }
    }
  }  

  const handleClick = () => {
    clearTimeout(timer)
    setIsClicked(true)
    timer = setTimeout(() => {
      setIsClicked(false)
    }, 300)
  }
  

  return (
    <div className="article-holder">
      <div className="article-header relative flex items-center py-3 pl-4 pr-10">
        <AuthorAvatar article={article} />
        <h3 className="text-sm capitalize pl-3 font-medium relative">
          <AuthorHeader article={article} />
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
            <VideoBlock
              postVideoUrl={article.post.postVideo}
              postVideoCover={article.post.postVideoCover}
              animVideoCover={animVideoCover}
            />
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
              <div
                onClick={() => {
                  handleLike()
                  handleClick()
                }}
                className={`like inline-block cursor-pointer animate__animated ${
                  isClicked && 'animate__pulse_active'
                }`}
              >
                {isLiked ? (
                  <FavoriteIcon className="fill-current text-red-600" />
                ) : (
                  <FavoriteBorderIcon className="fill-current text-gray-700" />
                )}
              </div>
            </li>
            <li className="px-2">
              <ChatBubbleOutlineIcon className="fill-current text-gray-700" />
            </li>
            <li className="px-2">
              <SendOutlinedIcon className="fill-current text-gray-700 transform -rotate-45 origin-top -ml-2" />
            </li>
          </ul>
          <div
            onClick={() => setIsSaved(!isSaved)}
            className="save cursor-pointer"
          >
            {isSaved ? (
              <BookmarkIcon className="fill-current text-gray-700" />
            ) : (
              <BookmarkBorderOutlinedIcon className="fill-current text-gray-700" />
            )}
          </div>
        </div>
        <div className="likes-count text-sm pt-2">
          {likeCount > 0 && likeCount + ' likes'}
        </div>
        <div className="comment text-sm py-1">
          <UserNameDropdown user={article.author[0]} />
          {article.post.postCaption}
        </div>
        <div className="comments-holder">
          {article.comments
            .sort((a, b) => (a.posted > b.posted ? 1 : -1))
            .map((comment, i) => (
              <ArticleComment key={i} comment={comment} />
            ))}
        </div>
        <div className="posted-on text-xs text-gray-400 uppercase pt-2">
          {
            ((hrs = Math.floor((now - article.post.posted.seconds) / 3600)),
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
        article={article}
      />
    </div>
  )
}

export default ArticleContent
