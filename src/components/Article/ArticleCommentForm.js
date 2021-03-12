import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import { DB } from 'context/UserContext'
import Picker from 'emoji-picker-react'
import React, { useRef, useState } from 'react'
import ClickOutside from 'utils/ClickOutside'

const ArticleCommentForm = ({article}) => {
  const db = DB()
  const [input, setInput] = useState('')
  const [isActivePopup, setActivePopup] = useState(false)
  const emojiRef = useRef(null)
  ClickOutside(emojiRef, setActivePopup)

  const onEmojiClick = (e, emojiObject) => {
    setInput(input + ' ' + emojiObject.emoji + ' ')
  }
  
  const addComment = (e) => {
    e.preventDefault()

    db.setComments([
      ...db.comments,
      {
        commentId: article.postId,
        commentUserId: db.users.find(({ username }) => (username = db.user)).userId,
        message: input,
      },
    ])
    setInput('') 
  }  
  
  return (
    <form>
      <div className="emoji-holder absolute left-3 top-1/2 transform -translate-y-1/2">
        <div ref={emojiRef} className="emoji-picker relative cursor-pointer">
          <SentimentSatisfiedOutlinedIcon
            className="cursor-pointer"
            onClick={() => setActivePopup(!isActivePopup)}
          />
          {isActivePopup && (
            <div className="emoji-popup absolute bottom-full mb-3.5 -left-3 z-50">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full block bg-none border-none shadow-none outline-none focus:outline-none focus:shadow-none placeholder-gray-500 h-9 text-gray-600 text-sm focus:ring-0"
        type="text"
        placeholder="Add a comment..."
      />
      <button
        onClick={addComment}
        disabled={!input}
        type="submit"
        className={`btn-holder font-medium text-sm text-blue-500 absolute right-3 top-1/2 transform 
        -translate-y-1/2 focus:outline-none ${
          !input && 'opacity-40 pointer-events-none'
        }`}
      >
        Post
      </button>
    </form>
  )
}

export default ArticleCommentForm
