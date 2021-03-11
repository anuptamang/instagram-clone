import Article from 'components/Article'
import UserSlider from 'components/UsersSlider'
import { DB } from 'context/UserContext'
import React from 'react'

function Content() {
  const db = DB()

  const articles = db.posts.map(({ postId, ...post }) => ({
    post: post,
    author: db.users.filter(({ userId }) => userId === post.userId),
    comments: db.comments
      .filter(({ commentId }) => commentId === postId)
      .map(({ commentUserId, message }) => ({
        message,
        user: db.users.filter(({ userId }) => userId === commentUserId),
      })),
  }))
  
  return (
    <>
      <div className="users-slider slider variable-width py-3 border overflow-hidden bg-white mb-6 relative rounded-sm flex flex-nowrap">
        <UserSlider />
      </div>
      {articles
        .map((article) => article)
        .sort((a, b) => (a.posted > b.posted ? 1 : -1))
        .map((article, i) => {
          return <Article article={article} loading={db.loading} key={i} />
        })}
    </>
  )
}

export default Content
