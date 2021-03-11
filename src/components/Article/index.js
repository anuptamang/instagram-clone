import 'assets/styles/slider.css'
import ArticleSkeleton from 'components/skeletons/ArticleSkeleton'
import React, { useState } from 'react'
import { usePageVisibility } from 'react-page-visibility'
import './article.scss'
import ArticleContent from './ArticleContent'

function Article({article, loading}) {
  const [isPlaying, setPlaying] = useState(false) 
  const [isPlayingFirst, setPlayingFirst] = useState(false) 
  const [isRodalVisible, setIsRodalVisible] = useState(false)

  const isPageVisible = usePageVisibility()

  const playVideo = () => {
    setPlaying(true)
    setPlayingFirst(true)
  }

  const pauseVideo = () => {
    setPlaying(false)
  } 

  return (
    <div className="article border border-gray-300 rounded bg-white mb-14">
      {loading ? (
        <ArticleSkeleton />
      ) : (
        <>
          <ArticleContent
            article={article}
            loading={loading}
            isPlaying={isPlaying}
            isPlayingFirst={isPlayingFirst}
            isRodalVisible={isRodalVisible}
            isPageVisible={isPageVisible}
            playVideo={playVideo}
            pauseVideo={pauseVideo}
            setIsRodalVisible={setIsRodalVisible}
            hasVideo={article.post.postVideo && true}
          />
        </>
      )}
    </div>
  )
}

export default Article
