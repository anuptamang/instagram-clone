import React from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

const ArticleActivityPopup = ({isVisible, setIsVisible}) => {
  return (
    <Rodal visible={isVisible} onClose={()=>setIsVisible(false)}>
      <div>Content</div>
    </Rodal>
  )
}

export default ArticleActivityPopup
