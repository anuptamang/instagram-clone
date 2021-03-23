import Emoji from 'components/_common/Emoji'
import { DB } from 'context/UserContext'
import db from 'fb/firebase'
import firebase from 'firebase'
import React, { useState } from 'react'

const ArticleCommentForm = ({article}) => {
  const dbContext = DB()
  const [input, setInput] = useState('')  

  const addComment = (e) => {
    e.preventDefault()
    let payload = {
        commentId: article.postId,
        commentUserId: dbContext.user.userId,
        message: input,
        posted: firebase.firestore.Timestamp.now(),
      }

    dbContext.setComments([payload])
    db.collection('comments').add(payload)
    setInput('') 
  }  
  
  return (
    <form>
      <div className="emoji-holder absolute left-3 top-1/2 transform -translate-y-1/2">
        <Emoji
          input={input}
          setInput={setInput}
          emojiPosition={`bottom-full mb-3.5 -left-3`}
        />
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
