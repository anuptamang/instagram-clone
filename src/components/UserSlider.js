import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './slider.css'

function UserSlider() { 
  const items = [
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
    <div className="slide w-20 px-2 text-center">
      <div className="img-avatar inline-block rounded-full overflow-hidden p-0.5 border-2 border-pink-700">
        <img
          className="rounded-full block"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          width="60"
          height="60"
          alt=""
        />
      </div>
      <div className="name block overflow-hidden whitespace-nowrap overflow-ellipsis text-xs">
        Esther Fletcher
      </div>
    </div>,
  ]

  return (
      <div className="users-slider slider variable-width py-3 border bg-white mb-6 relative rounded-sm">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          autoWidth
          items={items}
        />
      </div>
  )
}

export default UserSlider
