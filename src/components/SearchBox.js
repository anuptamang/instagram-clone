import React, { useState, useRef, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

function SearchBox(props) {
  const [isSearchActive, setSearchActive] = useState(false)

  const wrapperRef = useRef(null)
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Do this if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // do something
          setSearchActive(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  
  useOutsideAlerter(wrapperRef)

  return (
    <div className="search-box relative w-56 mx-auto hidden md:block">
      <input
        ref={wrapperRef}
        onClick={() => setSearchActive(true)}
        className={`rounded bg-gray-100 px-10 text-sm w-full text-gray-500 h-8 placeholder-gray-500 focus:outline-none ${
          !isSearchActive && 'cursor-default text-center px-3'
        }`}
        type="text"
        placeholder="Search"
      />
      <div
        className={`search-icon absolute top-1 left-2 ${
          !isSearchActive && 'left-16'
        }`}
      >
        <SearchIcon />
      </div>
      <button
        className={`absolute right-2 top-1 ${!isSearchActive && 'hidden'}`}
        type="clear"
      >
        <CloseIcon className="w-1" />
      </button>
    </div>
  )
}

export default SearchBox
