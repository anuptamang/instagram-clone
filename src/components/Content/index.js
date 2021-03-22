import Article from 'components/Article'
import UserPostPanel from 'components/UserPostPanel'
import UserSlider from 'components/UsersSlider'
import { DB } from 'context/UserContext'
import React from 'react'

function Content() {
  const dbContext = DB()  
  
  return (
    <>
      <UserSlider />
      <UserPostPanel />
      {dbContext.articles && dbContext.articles
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
