import React, { useRef } from 'react'
import Image from 'next/dist/client/image'
import StickyImgs from './StickyImgs'
import GetWidth from '../customHooks/GetWidth'
import { data } from '../consts'

function Sticky() {
  const widthSize = GetWidth()
  const { stickyData } = data
  const myRef = useRef()

  return (
    <div className="col-span-4 md:col-start-2 md:col-span-6 lg:col-span-12 lg:flex lg:justify-between">
      <div className="mt-14 lg:w-5/12 lg:mt-96">
        {stickyData.map((elem) => {
          return (
            <div
              key={elem.id}
              className="mb-16 text-textColor lg:min-h-1/2 lg:mb-0"
            >
              <h2 className="font-semibold text-5xl mb-6">{elem.title}</h2>
              {elem.id === 0 ? (
                <p ref={myRef} className="mb-16">
                  {elem.text}
                </p>
              ) : (
                <p className="mb-16">{elem.text}</p>
              )}
              {widthSize < 1024 && <Image src={elem.image} alt="picture" />}
            </div>
          )
        })}
      </div>
      {widthSize >= 1024 && <StickyImgs myRef={myRef.current.offsetTop} />}
    </div>
  )
}

export default React.memo(Sticky)
