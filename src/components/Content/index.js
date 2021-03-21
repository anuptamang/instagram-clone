import Article from 'components/Article'
import UserPostPanel from 'components/UserPostPanel'
import UserSlider from 'components/UsersSlider'
import { DB } from 'context/UserContext'
import React from 'react'

function Content() {
  const dbContext = DB()
  
  const articles = dbContext.posts.map(({ postId, ...post }) => ({
    post: post,
    postId: postId,
    author: dbContext.users.filter(({ userId }) => userId === post.userId),
    comments: dbContext.comments
      .filter(({ commentId }) => commentId === postId)
      .map(({ commentUserId, message, posted }) => ({
        message,
        posted,
        user: dbContext.users.filter(({ userId }) => userId === commentUserId),
      })),
    postLikes: dbContext.postLikes.map(({ likesId, ...likes }) => ({
      likesId: likesId,
      author: dbContext.users.filter(({ userId }) => userId === likes.userId),
    })),
  }))
  
  return (
    <>
      <UserSlider />
      <UserPostPanel />
      {articles && articles
        .map((article) => article)
        .sort((a, b) => (a.posted > b.posted ? -1 : 1))
        .map((article, i) => {
          return (
            <Article article={article} loading={dbContext.loading} key={i} />
          )
        })}
    </>
  )
}

export default Content
