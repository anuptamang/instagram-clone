import { NavLink } from 'react-router-dom'
import React from 'react'
import './profilePopup.scss'
import { DB } from 'context/UserContext'

export const ProfilePopup = ({user}) => {
  let posts
  const db = DB()

  return (
    <div className="user-popup absolute top-full left-0 -ml-1 z-50 rounded-2xl bg-white border border-gray-300 shadow w-96">
      <div className="header flex items-center p-5 py-4 border-b border-gray-300">
        <div className="avatar rounded-full overflow-hidden">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="description pl-3">
          <div className="title text-sm">
            <NavLink className="font-bold" to={`/${user.username}`}>
              {user.username}
            </NavLink>
            {user.isVerified && (
              <span className="verified inline-block align-top w-4 h-4 mt-0.5 ml-1">
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
          <div className="name text-gray-500 text-sm mb-1">{user.name}</div>
          {user.homepage && (
            <a
              className="text-blue-900 text-sm lowercase"
              href={user.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.homepage}
            </a>
          )}
          <div className="followed-by text-gray-500 text-sm">
            {user.followers.length > 0 && `Followed by ${user.followers[0]}`}
            {user.followers.length > 1 &&
              ` and ${user.followers.length - 1} ${
                user.followers.length >= 3 ? 'others' : 'other'
              }`}
          </div>
        </div>
      </div>
      <ul className="list-none grid grid-cols-3 space-x-3 text-center px-5 py-3">
        <li>
          <strong className="block text-sm">
            {db.posts
              .filter((post) => post.userId === user.userId)
              .length.toLocaleString()}
          </strong>
          <span className="block text-sm text-gray-500">posts</span>
        </li>
        <li>
          <strong className="block text-sm">
            {user.followers.length.toLocaleString()}
          </strong>
          <span className="block text-sm text-gray-500">followers</span>
        </li>
        <li>
          <strong className="block text-sm">
            {user.following.length.toLocaleString()}
          </strong>
          <span className="block text-sm text-gray-500">following</span>
        </li>
      </ul>
      <div className="posts grid grid-cols-3">
        {
          ((posts = db.posts.filter((post) => post.userId === user.userId)),
          posts.map((post, i) => {
            return (
              i < 3 && (
                <NavLink
                  key={i}
                  to={`/p/${post.postId}`}
                  className="block bg-cover h-32 hover:opacity-80 transition-opacity w-full"
                  style={{
                    backgroundImage: `url(${post.postImage[0]})`,
                  }}
                />
              )
            )
          }))
        }
      </div>
      <div className="panel py-3 px-5 grid grid-cols-2 space-x-2">
        <div className="message">
          <NavLink
            to={`/Direct/t/${user.username}`}
            className="block rounded-md border border-gray-400 py-1 px-4 text-center font-bold capitalize text-sm"
          >
            Message
          </NavLink>
        </div>
        <div className="following">
          <button className="block rounded-md border border-gray-400 py-1 px-4 text-center font-bold capitalize text-sm outline-none w-full focus:outline-none">
            Following
          </button>
        </div>
      </div>
    </div>
  )
}
