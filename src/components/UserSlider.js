import React, {useState} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function UserSlider() {
  const [slideRight, setSlideRight] = useState(0)
  const handleSlideRight = () => {
    setSlideRight(256)
  }

  console.log(slideRight);
  
  return (
    <div className="users-slider px-4 py-3 border bg-white mb-6 relative">
      <div className="btn-prev w-8 h-8 rounded-full bg-white shadow flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 hidden">
        <ArrowBackIosIcon className="ml-3" />
      </div>
      <div
        onClick={() => handleSlideRight()}
        className="btn-next w-8 h-8 rounded-full bg-white shadow flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <ArrowForwardIosIcon className="" />
      </div>
      <div className="slider-holder flex flex-nowrap">
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
        <div className="slide w-22 px-2 text-center">
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
        </div>
      </div>
    </div>
  )
}

export default UserSlider
