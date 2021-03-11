import React from 'react'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'

const ArticleCommentForm = () => {
  return (
    <form>
      <div className="emoji-holder absolute left-3 top-1/2 transform -translate-y-1/2">
        <SentimentSatisfiedOutlinedIcon />
      </div>
      <input
        className="w-full block bg-none border-none shadow-none outline-none focus:outline-none focus:shadow-none placeholder-gray-500 h-9 text-gray-600 text-sm focus:ring-0"
        type="text"
        placeholder="Add a comment..."
      />
      <button
        type="submit"
        className="btn-holder text-blue-500 absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
      >
        Post
      </button>
    </form>
  )
}

export default ArticleCommentForm
