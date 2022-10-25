import React, { useState, useEffect } from 'react'
import MobileIcon from './MobileIcon'
import HeaderLogo from './HeaderLogo'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import GetWidth from '../customHooks/GetWidth'
import { data } from '../consts'
import GetScroll from '../customHooks/GetScroll'

export default function Header() {
  const [headerData, setHeaderData] = useState(data.headerData)
  const [showMobNav, setShowMobNav] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(null)
  const widthSize = GetWidth()
  const scrollPosition = GetScroll()

  useEffect(() => {
    if (scrollPosition > currentScroll) {
      setShowMobNav(false)
      setShowHeader(false)
    } else {
      setShowMobNav(false)
      setShowHeader(true)
    }
    setCurrentScroll(scrollPosition)
  }, [scrollPosition])

  const openMobileNav = () => {
    setShowMobNav(!showMobNav)
  }

  return (
    <header
      className={`fixed w-full duration-300 z-20 top-0 ${
        !showHeader && '-top-24'
      }`}
    >
      <div className="bg-headerbg h-88 relative z-10 flex">
        <div
          className={`w-full max-w-screen-2xl grid grid-cols-4 gap-x-5 mx-8 md:grid-cols-8 lg:grid-cols-12 xl:mx-40 2xl:mx-56`}
        >
          <HeaderLogo />
          {widthSize >= 768 && <Navbar nav={headerData.nav} />}
          {widthSize <= 767 && (
            <MobileIcon openMobileNav={openMobileNav} showMobNav={showMobNav} />
          )}
        </div>
      </div>
      {widthSize <= 767 && (
        <MobileNavbar
          openMobileNav={openMobileNav}
          showMobNav={showMobNav}
          nav={headerData.nav}
        />
      )}
    </header>
  )
}
