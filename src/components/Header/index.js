import React, {useRef, useState} from 'react'
import SearchBox from 'components/SearchBox';
import Logo from 'components/_common/Logo'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import Dropdown from 'components/_common/Dropdown'
import hideOnClickOutside from 'utils/ClickOutside'
import { NavLink, withRouter } from 'react-router-dom'
import { navLinks } from 'constants/nav-routes'
import './Header.scss'

function Header({location}) {
   const [isActive, setDropdown] = useState(false)
   const wrapperRef = useRef(null)
   hideOnClickOutside(wrapperRef, setDropdown)

   const pathname = location.pathname.split('/')[1]

   const setAddActive = (path) => (path === pathname ? 'page-active' : '')

  return (
    <header className="border-b bg-white">
      <div className="lg:container mx-auto py-3 px-5 grid grid-cols-2 gap-4 md:grid-cols-3 content-center">
        <Logo />
        <SearchBox />
        <ul className="header-list list-none grid grid-flow-col justify-end gap-4">
          <li>
            <ul className="list-none flex space-x-3">
              {navLinks.map((item, index) => {
                return index < 3 ? (
                  <li key={item.key}>
                    <NavLink
                      to={item.path}
                      className={setAddActive(item.altPath)}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ) : (
                  ''
                )
              })}
            </ul>
          </li>
          <li>
            <FavoriteBorderOutlinedIcon />
          </li>
          <li>
            <div
              ref={wrapperRef}
              className="user relative"
              onClick={() => setDropdown(true)}
            >
              <img
                className="rounded-full mt-1 cursor-pointer transition-opacity hover:opacity-70"
                src="https://randomuser.me/api/portraits/men/17.jpg"
                width="22"
                height="22"
                alt=""
              />
              <Dropdown isActive={isActive} />
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default withRouter(Header)
