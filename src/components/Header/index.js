import React from 'react'
import SearchBox from 'components/SearchBox';
import HeaderPanels from 'components/Header/HeaderPanels';
import Logo from 'components/_common/Logo'

function Header(props) {
  return (
    <header className="border-b bg-white">
      <div className="lg:container mx-auto py-3 px-5 grid grid-cols-2 gap-4 md:grid-cols-3 content-center">
        <Logo />
        <SearchBox />
        <HeaderPanels />
      </div>
    </header>
  );
}

export default Header
