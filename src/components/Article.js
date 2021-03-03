import React, { useState, useEffect } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import ArticleSkeleton from '../skeletons/ArticleSkeleton'

function Article() {
  const [isLoading, setLoading] = useState(true)
  const articleImg =
    'https://i.picsum.photos/id/485/536/354.jpg?hmac=pZOQxjCkUNUNbkfL1jqEoKmjQC45m3jN39RD3To638U'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="article border border-gray-300 rounded bg-white mb-14">
      {isLoading ? (
        <ArticleSkeleton />
      ) : (
        <div className="article-holder">
          <div className="article-header relative flex items-center py-3 px-4">
            <div className="img-avatar rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
              <img
                className="rounded-full block"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                width="30"
                height="30"
                alt=""
              />
            </div>
            <h3 className="text-sm capitalize pl-3 font-medium">Tina Bryant</h3>
            <div className="dots absolute top-1/2 right-4 transform -translate-y-1/2">
              <MoreHorizIcon />
            </div>
          </div>
          <div
            className="img-holder h-60 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${articleImg})` }}
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
                <strong>foodmandu</strong> We are super excited to announce that
                we are coming soon to your city of history and culture! 🎊 We
                look forward to take care of all your cravings!
              </div>
              <div className="comment text-sm py-1">
                <strong>Jon Doe</strong> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quis voluptates velit eligendi ratione
                voluptatum.
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
        </div>
      )}
    </div>
  )
}

export default Article
