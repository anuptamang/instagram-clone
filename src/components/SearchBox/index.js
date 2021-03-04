import React, { useState, useRef } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import hideOnClickOutside from 'utils/ClickOutside'

function SearchBox(props) {
  const [isSearchActive, setSearchActive] = useState(false)

  const wrapperRef = useRef(null)  
  hideOnClickOutside(wrapperRef, setSearchActive)

  return (
    <div className="search-box relative w-56 mx-auto hidden md:block">
      <input
        ref={wrapperRef}
        onClick={() => setSearchActive(true)}
        className={`rounded border border-gray-300 bg-gray-100 px-10 text-sm w-full text-gray-500 h-8 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 ${
          !isSearchActive &&
          'cursor-default text-center px-3 focus:ring-0 focus:border-gray-300'
        }`}
        type="text"
        placeholder="Search"
      />
      <div
        className={`search-icon absolute top-1 left-2 ${
          !isSearchActive && 'left-16'
        }`}
      >
        <SearchIcon className="fill-current text-gray-400" />
      </div>
      <button
        className={`absolute right-2 top-1 ${!isSearchActive && 'hidden'}`}
        type="clear"
      >
        <CloseIcon className="w-1 fill-current text-gray-400 -mt-1" />
      </button>
    </div>
  )
}

export default SearchBox
