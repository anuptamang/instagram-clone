import React from 'react'
import UserNameDropdown from './UserNameDropdown'

const ArticleComment = ({key, comment}) => {
  return (
    <div key={key} className="comment text-sm py-1">
      <UserNameDropdown user={comment.user[0]} />
      {comment.message}
    </div>
  )
}

export default ArticleComment
