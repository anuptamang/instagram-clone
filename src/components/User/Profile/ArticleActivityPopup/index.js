import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import './rodal.scss'

const ArticleActivityPopup = ({isVisible, setIsVisible, article}) => {
  // console.log(article)
  return (
    <Rodal visible={isVisible} onClose={() => setIsVisible(false)}>
      <ul className="list-none text-center text-sm">
        <li className="px-4 py-3 text-red-600 border-b border-gray-300">
          <strong>Report</strong>
        </li>
        <li className="px-4 py-3 text-red-600 border-b border-gray-300">
          <strong>Unfollow</strong>
        </li>
        <li className="px-4 py-3 text-gray-600 border-b border-gray-300">
          <strong>Go to post</strong>
        </li>
        <li className="px-4 py-3 text-gray-600 border-b border-gray-300">
          <strong>Share to...</strong>
        </li>
        <li className="px-4 py-3 text-gray-600 border-b border-gray-300">
          <strong>Copy Link</strong>
        </li>
        <li className="px-4 py-3 text-gray-600 border-b border-gray-300">
          <strong>Embed</strong>
        </li>
        <li className="px-4 py-3 text-gray-600">
          <strong>Cancel</strong>
        </li>
      </ul>
    </Rodal>
  )
}

export default ArticleActivityPopup
