import React from 'react'
function Dropdown({handleLogout, ...props}) {  

  return (
    <div className={`dropdown-holder w-64 absolute z-30 -right-3 top-full mt-4 ${(!props.isActive || props.isNewPage) && 'hidden' } `}>
      <div className="arrow w-6 h-6 shadow transform -rotate-45 absolute -top-1 right-3 z-1"></div>
      <div className="arrow w-6 h-6 bg-white transform -rotate-45 absolute top-0 -mt-1 right-3 z-30"></div>
      <div className="dropdown list-none bg-white shadow rounded-md overflow-hidden relative">
        {props.children}
      </div>
    </div>
  )
}

export default Dropdown
