import 'assets/styles/slider.css'
import ArticleSkeleton from 'components/skeletons/ArticleSkeleton'
import React, { useState } from 'react'
import { usePageVisibility } from 'react-page-visibility'
import './article.scss'
import ArticleContent from './ArticleContent'

function Article({article, loading}) {
  const [isRodalVisible, setIsRodalVisible] = useState(false)

  return (
    <div className="article border border-gray-300 rounded bg-white mb-14">
      {loading ? (
        <ArticleSkeleton />
      ) : (
        <>
          <ArticleContent
            article={article}
            loading={loading}
            isRodalVisible={isRodalVisible}
            setIsRodalVisible={setIsRodalVisible}
            hasVideo={article.post.postVideo && true}
          />
        </>
      )}
    </div>
  )
}

export default Article
