import React from 'react'
import './profilePopup.scss'

export const ProfilePopup = ({user}) => {
  console.log(user)
  return (
    <div className="user-popup absolute top-full left-0 -ml-1 z-50 rounded-2xl bg-white border border-gray-300 shadow w-96">
      <div className="header flex items-center p-5 py-4 border-b border-gray-300">
        <div className="avatar rounded-full overflow-hidden">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="description pl-3">
          <div className="title text-sm">
            {user.username}
            {user.isVerified && (
              <span className="verified inline-block align-top w-4 h-4 mt-1.5 ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <polygon
                    fill="#42a5f5"
                    points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                  />
                  <polygon
                    fill="#fff"
                    points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                  />
                </svg>
              </span>
            )}
          </div>
          <div className="name text-gray-500 text-sm">{user.name}</div>
          <div className="followed-by text-gray-500 text-sm">Followed by {}</div>
        </div>
      </div>
      <div className="info-holder p-5"></div>
    </div>
  )
}
