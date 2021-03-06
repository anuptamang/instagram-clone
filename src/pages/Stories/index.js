import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Stories from 'react-insta-stories'
import './stories.css'

function SeeMore({ close }) {
  return (
    <div className="text-white p-8 text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
      explicabo a ea. Veniam nemo qui, laudantium eos sequi commodi tenetur quod
      et in libero sapiente vitae, modi nulla ipsam temporibus.
      <div className="text-white" onClick={close}>
        Hello, click to close this.
      </div>
    </div>
  )
}

const stories = [
  [
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      header: {
        heading: 'Anup Tamang',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      url:
        'https://i.picsum.photos/id/868/536/354.jpg?hmac=ZcbB7ABIgl6LS5B1wxkzJ_dxJFgNmCsODUTfxM5GdRk',
      duration: 5000,
      header: {
        heading: 'Anup Tamang',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      url: 'videos/avengers.mp4',
      duration: 5000, // ignored
      type: 'video',
    },
  ],
  [
    {
      url:
        'https://i.picsum.photos/id/945/536/354.jpg?hmac=VuYuUPHKNubjREdR4hkLOLHkhYnoZINbXG3ssAFtpno',
      duration: 5000,
      header: {
        heading: 'Jon Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
  ],
  [
    {
      url:
        'https://i.picsum.photos/id/552/536/354.jpg?hmac=Nh5d2xbHHM6VW4ZvGKkunjVMSxeXf0zdRawmX6MxvRo',
      duration: 5000,
      header: {
        heading: 'Jane Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
  ],
  [
    {
      url:
        'https://i.picsum.photos/id/945/536/354.jpg?hmac=VuYuUPHKNubjREdR4hkLOLHkhYnoZINbXG3ssAFtpno',
      duration: 5000,
      header: {
        heading: 'Jon Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
  ],
  [
    {
      url:
        'https://i.picsum.photos/id/552/536/354.jpg?hmac=Nh5d2xbHHM6VW4ZvGKkunjVMSxeXf0zdRawmX6MxvRo',
      duration: 5000,
      header: {
        heading: 'Jane Doe',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
  ],
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function StoriesPage() {
  const params = {
      additionalTransfrom: 0,
      arrows: true,
      autoPlaySpeed: 3000,
      centerMode: true,
      draggable: true,
      focusOnSelect: false,
      infinite: false,
      keyBoardControl:true,
      minimumTouchDrag: 80,
      renderButtonGroupOutside: false,
      renderDotsOutside: false,
      showDots: false,
      sliderClass: "story-slide",
      slidesToSlide: 1,
      swipeable:true,
      autoWidth: true,
  }  

  const storyStyles = {
    height: 'calc(100vh - 120px)',
    width: '200px'
  }
  
  
  return (
    <div className="py-12 px-4 flex space-x-20 stories-holder items-center">
      {stories.map((story) => (
        <Stories
          key={Math.floor(Math.random() * Date.now())}
          stories={story}
          loop
          
        />
      ))}
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
