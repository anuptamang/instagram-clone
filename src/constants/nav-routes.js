import Home from 'pages/Home'
import Messages from 'pages/Messages'
import Explore from 'pages/Explore'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import HomeIcon from '@material-ui/icons/Home'

export const navLinks = [
  {
    key: 0,
    path: '/',
    title: <HomeIcon />,
    altPath: '',
    disable: false,
  },
  {
    key: 1,
    path: '/messages',
    title: <SendOutlinedIcon className="transform -rotate-45 -mt-1" />,
    altPath: 'messages',
    disable: false,
  },
  {
    key: 2,
    path: '/explore',
    title: <ExploreOutlinedIcon />,
    altPath: 'explore',
    disable: false,
  },
]

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
