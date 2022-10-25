import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SocialPages({ socialPages }) {
  return (
    <div className="col-start-1 col-span-3 md:col-start-5 lg:col-start-10 mt-14">
      <div className="flex">
        {socialPages.map((elem) => {
          return (
            <div key={elem.id} className="cursor-pointer mr-5">
              <Link href={elem.link}>
                <a target="_blank">
                  <Image src={elem.image} alt="socialIcon" />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
