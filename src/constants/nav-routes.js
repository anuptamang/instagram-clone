import Home from 'pages/Home'
import Messages from 'pages/Messages'
import Explore from 'pages/Explore'

export const pageRoutes = [
  {
    key: 0,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 1,
    path: '/messages',
    exact: true,
    component: Messages,
  },
  {
    key: 2,
    path: '/explore',
    exact: true,
    component: Explore,
  },
]
