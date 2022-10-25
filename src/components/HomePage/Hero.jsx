import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '../consts'

function Hero() {
  const { heroData } = data

  return (
    <div className="grid gap-x-4 grid-cols-4 my-20 md:grid-cols-8 xl:gap-x-6 lg:grid-cols-12 lg:col-start-1 lg:my-40 2xl:my-52">
      {heroData.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            <h1 className="col-span-4 text-center md:col-span-6 md:col-start-2 lg:col-span-6 font-semibold text-textColor lg:text-left lg:flex items-end text-[52px]">
              {elem.title}
            </h1>
            <div className="col-span-4 mb-12 mt-9 md:col-span-6 md:col-start-2 lg:col-start-7 lg:mb-0 lg:mt-0 lg:col-span-6 lg:row-span-2">
              <Image src={elem.image} alt="picture" />
            </div>
            <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-1 lg:col-span-6 text-center lg:text-left lg:mt-6">
              <p className="mb-16 lg:mb-14">{elem.text}</p>
              <Link href="/signin">
                <a className="bg-blue py-3 px-6 rounded-full text-white hover:shadow-shadow active:bg-darkBlue">
                  Agree
                </a>
              </Link>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default React.memo(Hero)
