import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

function ArticleSkeleton() {
  return (
    <div className="article-skeleton">
      <div className="article-header relative flex items-center py-3 px-4">
        <Skeleton className="mr-4" variant="circle" width={40} height={40} />
        <Skeleton variant="text" width={100} />
        <div className="dots absolute top-1/2 right-4 transform -translate-y-1/2 flex justify-between">
          <Skeleton className="ml-1" variant="circle" width={6} height={6} />
          <Skeleton className="ml-1" variant="circle" width={6} height={6} />
          <Skeleton className="ml-1" variant="circle" width={6} height={6} />
        </div>
      </div>
      <Skeleton animation="wave" variant="rect" height={300}></Skeleton>
      <div className="messages-panel p-3">
        <Skeleton className="mb-3" variant="text" width="60%" height={40} />
        <Skeleton className="mb-3" variant="text" width="80%" />
        <Skeleton className="mb-3" variant="text" width="100%" />
        <Skeleton className="mb-3" variant="text" width="50%" />
      </div>
    </div>
  )
}

export default ArticleSkeleton
