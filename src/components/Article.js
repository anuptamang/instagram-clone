import React, {useState, useEffect} from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Article() {
  const [isLoading, setLoading] = useState(true);
  const articleImg =
    'https://i.picsum.photos/id/485/536/354.jpg?hmac=pZOQxjCkUNUNbkfL1jqEoKmjQC45m3jN39RD3To638U'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="content-holder overflow-hidden">
      <div className="article border border-gray-300 rounded-sm bg-white">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="bg-gray-200 h-60 w-full"></div>
            <div className="p-4">
              <div className="py-1 mb-3 bg-gray-200 rounded w-1/4">&nbsp;</div>
              <div className="">
                <div className="py-1 mb-3 bg-gray-200 rounded w-1/1.5">
                  &nbsp;
                </div>
                <div className="py-1 mb-3 bg-gray-200 rounded w-1/2">
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="article-holder">
            <div className="article-header relative flex items-center py-3 px-4">
              <div className="img-avatar rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
                <img
                  className="rounded-full block"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  width="30"
                  height="30"
                  alt=""
                />
              </div>
              <h3 className="text-sm capitalize pl-3 font-medium">Tina Bryant</h3>
              <div className="dots absolute top-1/2 right-4 transform -translate-y-1/2"><MoreHorizIcon /></div>
            </div>
            <div
              className="img-holder h-60 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${articleImg})` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Article
