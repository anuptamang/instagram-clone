import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import UserDropdown from 'components/Header/UserDropdown';
import SearchBox from 'components/SearchBox';
import Dropdown from 'components/_common/Dropdown';
import Logo from 'components/_common/Logo';
import { navLinks } from 'constants/nav-routes';
import React, { useRef, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import hideOnClickOutside from 'utils/ClickOutside';
import { useLocationChange } from 'utils/utils';
import './Header.scss';

function Header({ location, handleLogout, currentUser, setLoggedIn }) {
  const [isActiveUser, setDropdownUser] = useState(false)
  const [isActive, setDropdownFav] = useState(false)
  const [isNewPage, setNewPage] = useState(false)
  const wrapperRefUser = useRef(null)
  const wrapperRefFav = useRef(null)
  hideOnClickOutside(wrapperRefUser, setDropdownUser)
  hideOnClickOutside(wrapperRefFav, setDropdownFav)

  const pathname = location.pathname.split('/')[1]
  const setAddActive = (path) => (path === pathname ? 'page-active' : '')

  useLocationChange(() => {
    setNewPage(true)
  })

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="lg:container mx-auto py-3 px-5 grid grid-cols-2 gap-4 md:grid-cols-3 content-center">
        <Logo />
        <SearchBox />
        <ul className="header-list list-none grid grid-flow-col justify-end gap-4 mt-0.5">
          <li>
            <ul className="list-none flex space-x-3">
              {navLinks.map((item, index) => {
                return index < 3 ? (
                  <li key={item.key}>
                    <NavLink
                      to={item.path}
                      className={setAddActive(item.altPath)}
                    >
                      {pathname === item.altPath
                        ? item.activeTitle
                        : item.title}
                    </NavLink>
                  </li>
                ) : (
                  ''
                )
              })}
            </ul>
          </li>
          <li>
            <div
              ref={wrapperRefFav}
              className="relative"
              onClick={() => {
                setDropdownFav(!isActive)
                setNewPage(false)
              }}
            >
              <span className="cursor-pointer">
                {isActive ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
              </span>
              <Dropdown isActive={isActive}>
                <div className="p-4">Notifications....</div>
              </Dropdown>
            </div>
          </li>
          <li>
            <div
              ref={wrapperRefUser}
              className={`user relative rounded-full w-7 h-7 p-0.5 border border-transparent ${
                isActiveUser && 'border-black'
              }`}
              onClick={() => {
                setDropdownUser(!isActiveUser)
                setNewPage(false)
              }}
            >
              <img
                className="rounded-full cursor-pointer"
                src={
                  currentUser.avatar
                    ? currentUser.avatar
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYQnIWk8PamawU9zU6wJxIxRtuzAxgy2Y4A&usqp=CAU'
                }
                width="22"
                height="22"
                alt=""
              />
              <Dropdown isActive={isActiveUser} isNewPage={isNewPage}>
                <UserDropdown
                  setLoggedIn={setLoggedIn}
                  handleLogout={handleLogout}
                  currentUser={currentUser}
                />
              </Dropdown>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default withRouter(Header)
