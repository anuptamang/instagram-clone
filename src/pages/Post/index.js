import Article from 'components/Article'
import { DB } from 'context/UserContext'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Post = () => {
  const dbContext = DB()
  const [article, setArticle] = useState(null)  
  let articleId = useParams().postId
  
  useEffect(() => {
    setArticle(
      dbContext.articles.find(({ postId }) => postId === articleId)
    )
  }, [articleId, dbContext.articles]) 
  
  return (
    <div className="container">
      {article && <Article article={article} loading={dbContext.loading} />}
      {
        console.log(article)
      }
    </div>
  )
}

export default Post
