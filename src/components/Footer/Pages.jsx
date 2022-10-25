import React, { Fragment } from 'react'
import Link from 'next/link'

export default function Pages({ pages }) {
  return (
    <div className="flex flex-col col-start-1 col-span-3 md:col-start-5 lg:col-start-7">
      <p className="text-white font-semibold text-lg mb-2">Pages</p>
      {pages.map((elem) => (
        <React.Fragment key={elem.id}>
          <Link href={elem.path}>
            <a className="text-white mt-4">{elem.text}</a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  )
}
