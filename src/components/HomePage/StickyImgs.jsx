import React, { useState, useEffect } from 'react'
import Image from 'next/dist/client/image'
import GetScroll from '../customHooks/GetScroll'
import { data } from '../consts'

export default function StickyImgs({ myRef }) {
  const [currentPicture, setCurrentPicture] = useState(null)

  const scrollPosition = GetScroll()
  const { stickyData } = data

  useEffect(() => {
    for (let i = 0; i < stickyData.length; i++) {
      i < 1
        ? scrollPosition <= myRef && setCurrentPicture(i)
        : scrollPosition >= myRef + 650 * (i - 1) &&
          scrollPosition <= myRef + 650 * i &&
          setCurrentPicture(i)
    }
  }, [scrollPosition])

  return (
    <div className="w-1/2 py-72">
      {stickyData.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            {elem.id === currentPicture && (
              <div className="sticky top-1/4">
                <Image src={elem.image} alt="picture" />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
