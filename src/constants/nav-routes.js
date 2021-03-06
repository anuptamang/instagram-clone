import Home from 'pages/Home'
import Messages from 'pages/Messages'
import Explore from 'pages/Explore'
import Profile from 'pages/Profile'
import Saved from 'pages/Saved'
import Settings from 'pages/Settings'

import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import SendIcon from '@material-ui/icons/Send'
import ExploreIcon from '@material-ui/icons/Explore'
import HomeIcon from '@material-ui/icons/Home'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import Stories from 'pages/Stories'


export const navLinks = [
  {
    key: 0,
    path: '/',
    title: <HomeOutlinedIcon />,
    activeTitle: <HomeIcon />,
    altPath: '',
    disable: false,
  },
  {
    key: 1,
    path: '/messages',
    title: <SendOutlinedIcon className="transform -rotate-45 -mt-1" />,
    activeTitle: <SendIcon className="transform -rotate-45 -mt-1" />,
    altPath: 'messages',
    disable: false,
  },
  {
    key: 2,
    path: '/explore',
    title: <ExploreOutlinedIcon />,
    activeTitle: <ExploreIcon />,
    altPath: 'explore',
    disable: false,
  },
]

export const userDropdownLinks = [
  {
    key: 0,
    path: '/profile',
    title: 'profile',
    icon: <AccountCircleOutlinedIcon />,
    altPath: 'profile',
    disable: false,
  },
  {
    key: 2,
    path: '/saved',
    title: 'saved',
    icon: <BookmarkBorderOutlinedIcon />,
    altPath: 'saved',
    disable: false,
  },
  {
    key: 3,
    path: '/settings',
    title: 'settings',
    icon: <SettingsOutlinedIcon />,
    altPath: 'settings',
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
  {
    key: 3,
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    key: 4,
    path: '/saved',
    exact: true,
    component: Saved,
  },
  {
    key: 5,
    path: '/settings',
    exact: true,
    component: Settings,
  },
  {
    key: 6,
    path: '/stories',
    exact: true,
    component: Stories,
  },
]
