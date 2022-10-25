import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ nav }) {
  const router = useRouter()

  return (
    <nav className="flex justify-end items-center md:col-span-7 lg:col-span-11">
      {nav.map((elem) => (
        <React.Fragment key={elem.id}>
          <Link href={elem.path}>
            <a
              className={`ml-8 font-medium text-base hover:text-blue ${
                router.pathname === elem.path && 'text-blue'
              }`}
            >
              {elem.text}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  )
}
