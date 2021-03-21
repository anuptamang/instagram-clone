import React, { useRef, useState } from 'react'
import ClickOutside from 'utils/ClickOutside'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import Picker from 'emoji-picker-react'

const Emoji = ({setInput, input, emojiPosition}) => {
  const [isActivePopup, setActivePopup] = useState(false)
  const emojiRef = useRef(null)

  ClickOutside(emojiRef, setActivePopup)

  const onEmojiClick = (e, emojiObject) => {
    setInput(input + ' ' + emojiObject.emoji + ' ')
  }

  return (    
    <div ref={emojiRef} className="emoji-picker relative cursor-pointer">
      <SentimentSatisfiedOutlinedIcon
        className="cursor-pointer"
        onClick={() => setActivePopup(!isActivePopup)}
      />
      {isActivePopup && (
        <div className={`emoji-popup absolute z-50 ${emojiPosition}`}>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  )
}

export default Emoji
