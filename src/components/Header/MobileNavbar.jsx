import React from 'react'
import Link from 'next/link'

export default function MobileNavbar({ showMobNav, nav, openMobileNav }) {
  return (
    <nav
      className={`${
        showMobNav ? 'translate-y-0' : '-translate-y-44'
      } absolute bg-headerbg duration-500 w-full text-center flex flex-col font-medium text-base`}
    >
      {nav.map((elem) => (
        <React.Fragment key={elem.id}>
          <Link href={elem.path}>
            <a onClick={openMobileNav} className="py-4 hover:bg-blue">
              {elem.text}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  )
}
