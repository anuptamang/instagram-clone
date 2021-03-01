import React from 'react'
import SearchBox from '../components/SearchBox';
import HeaderPanels from '../components/HeaderPanels';

function Header(props) {
  return (
    <header className="border-b bg-white">
      <div className="lg:container mx-auto py-6 px-5 grid grid-cols-2 gap-4 md:grid-cols-3 content-center">
        <div className="logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>
        <SearchBox />
        <HeaderPanels />
      </div>
    </header>
  );
}

export default Header
