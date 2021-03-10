import React from 'react'
import Stories from 'react-insta-stories'

function SeeMore({close}) {
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
    'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      isPaused: true,
      header: {
        heading: 'Mohit Karekar',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    {
      url:
        'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
      duration: 5000,
      isPaused: true,
      seeMore: SeeMore, // some component
    },
  ],
  [
    'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      isPaused: true,
      header: {
        heading: 'Mohit Karekar',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    {
      url:
        'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
      duration: 5000,
      isPaused: true,
      seeMore: SeeMore, // some component
    },
  ],
  [
    'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      isPaused: true,
      header: {
        heading: 'Mohit Karekar',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    {
      url:
        'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
      duration: 5000,
      isPaused: true,
      seeMore: SeeMore, // some component
    },
  ],
  [
    'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      isPaused: true,
      header: {
        heading: 'Mohit Karekar',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    {
      url:
        'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
      duration: 5000,
      isPaused: true,
      seeMore: SeeMore, // some component
    },
  ],
  [
    'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
    {
      url:
        'https://i.picsum.photos/id/430/536/354.jpg?hmac=uxrNCXgJuycp2JMZ9jpZb5ThTsZIplRTSPuc4ybMyws',
      duration: 5000,
      isPaused: true,
      header: {
        heading: 'Mohit Karekar',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      content: (props) => (
        <div style={{ background: 'pink', padding: 20 }}>
          <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
        </div>
      ),
    },
    {
      url:
        'https://i.picsum.photos/id/44/536/354.jpg?hmac=gr9s90YEHTR2r0xSI_Q-BzX07et5YTXdnM0uRl9gYIc',
      duration: 5000,
      isPaused: true,
      seeMore: SeeMore, // some component
    },
  ],
]

const StoriesData = () => {
  return (
    <>
      {stories.map((story) => (
        <Stories
          key={Math.floor(Math.random() * Date.now())}
          stories={story}
        />
      ))}
    </>
  )
}

export default StoriesData
