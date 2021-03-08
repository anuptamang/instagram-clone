import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import React from 'react'
import Stories from 'react-insta-stories'
import './stories.scss'

function SeeMore({ close }) {
  return (
    <>
      <div className="py-20 p-8 text-center block absolute bottom-0 left-0 w-full font-light italic text-2xl text-yellow-200">
        Sometimes two people have to fall apart to realize how much they need to
        fall back together.
      </div>
      <div className="text-white absolute top-0 left-0 h-full w-full" onClick={close}></div>
    </>
  )
}

const stories = [
  [
    {
      url:
        'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
      duration: 5000,
      content: ({ action, isPaused }) => {
        setTimeout(() => {
          action('pause')
        })
        return (
          <div
            className="flex items-center justify-center flex-wrap absolute top-0 left-0 w-full h-full bg-cover bg-center text-center"
            style={{
              backgroundImage:
                'url(https://wallpapercave.com/wp/wp2722822.jpg)',
            }}
          >
            <div className="wrap">
              <div className="avatar block w-24 h-24 rounded-full mx-auto mb-3 p-1 border border-white">
                <img
                  className="max-w-full h-auto rounded-full"
                  src="https://picsum.photos/300/300"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl font-bold">Anup Tamang</div>
            </div>
          </div>
        )
      },
      header: {
        heading: 'Anup Tamang',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      url:
        'https://i.picsum.photos/id/129/536/354.jpg?hmac=gjW_nduOoXN0pECejBE5tOikjkxxiYjU9JQq_Y-nPBQ',
      duration: 5000,
      seeMore: SeeMore,
      header: {
        heading: 'Anup Tamang',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
  ],
  [
    {
      url: 'https://wallpapershome.com/images/pages/pic_v/23097.jpg',
      duration: 5000,
      header: {
        heading: 'Jon Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/600/600',
      },
    },
    {
      url:
        'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      duration: 5000,
      header: {
        heading: 'Jon Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/600/600',
      },
    },
    {
      url:
        'https://i.pinimg.com/originals/34/d1/66/34d166cb81ca28ac001890f9a43c2f4f.jpg',
      duration: 5000,
      header: {
        heading: 'Jon Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/600/600',
      },
    },
    {
      url:
        'https://i.picsum.photos/id/129/536/354.jpg?hmac=gjW_nduOoXN0pECejBE5tOikjkxxiYjU9JQq_Y-nPBQ',
      duration: 5000,
      seeMore: SeeMore,
      header: {
        heading: 'Anup Tamang',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      url: '/videos/video1.mp4',
      duration: 5000, // ignored
      type: 'video',
    },
  ],
  [
    {
      url:
        'https://st3.depositphotos.com/1606449/16889/i/1600/depositphotos_168896024-stock-photo-open-grass-field-with-big.jpg',
      duration: 5000,
      content: ({ action, isPaused }) => {
        setTimeout(() => {
          action('pause')
        })
        return (
          <div
            className="flex items-center justify-center flex-wrap absolute top-0 left-0 w-full h-full bg-cover bg-center text-center"
            style={{
              backgroundImage:
                'url(http://www.solofondos.com/wp-content/uploads/2016/08/1F1FJm4.jpg)',
            }}
          >
            <div className="wrap">
              <div className="avatar block w-24 h-24 rounded-full mx-auto mb-3 p-1 border border-white">
                <img
                  className="max-w-full h-auto rounded-full"
                  src="https://picsum.photos/400/400"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl font-bold">Jane Doe</div>
            </div>
          </div>
        )
      },
      header: {
        heading: 'Lorem Ipsum',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/200/200',
      },
    },
    {
      url:
        'https://previews.123rf.com/images/narmadagharat/narmadagharat1409/narmadagharat140900018/32094916-big-vertical-waterfall-in-the-rain-forest.jpg',
      duration: 5000,
      header: {
        heading: 'Lorem Ipsum',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/200/200',
      },
    },
  ],
]

function StoriesPage() {
  
  return (
    <div className="py-12 stories-slider items-center relative">
      <div className="close absolute right-5 top-5 z-50">
        <svg
          aria-label="Close"
          class="_8-yf5 "
          fill="#ffffff"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            clip-rule="evenodd"
            d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <button className="btn-prev text-black bg-white rounded-full w-10 h-10 flex items-center justify-center absolute left-1/2 top-1/2  transform -translate-x-1/2 z-50 cursor-pointer pl-2 focus:outline-none">
        <ArrowBackIosIcon />
      </button>
      <button className="btn-next text-black bg-white rounded-full w-10 h-10 flex items-center justify-center absolute right-1/2 top-1/2  transform -translate-x-1/2 z-50 cursor-pointer focus:outline-none">
        <ArrowForwardIosIcon />
      </button>
      <div className="slideset absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-transform">
        {stories.map((story) => (
          <div className="slide mx-5 w-80 rounded-lg overflow-hidden">
            <Stories
              key={Math.floor(Math.random() * Date.now())}
              stories={story}
              loop={true}
            />
          </div>
        ))}
      </div>
      {/* <Carousel {...params} responsive={responsive}>
        {stories.map((story) => (
          <Stories pause={true}
            key={Math.floor(Math.random() * Date.now())}
            stories={story}
          />
        ))}
      </Carousel> */}
    </div>
  )
}

export default StoriesPage
