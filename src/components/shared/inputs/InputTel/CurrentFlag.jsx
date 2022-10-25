import React from 'react'
import Image from 'next/dist/client/image'

export default function CurrentFlag({
  telCountries,
  showCountries,
  showDropDown,
}) {
  return (
    <>
      {telCountries.map(
        (elem) =>
          elem.isVisible && (
            <div className="flex" key={elem.id}>
              <div onClick={showDropDown} className="cursor-pointer flex">
                <Image
                  key={elem.id}
                  src={elem.flag}
                  alt="flag"
                  width={24}
                  height={16}
                />
                <div className={`${showCountries && 'rotate-180'} flex ml-3.5`}>
                  <Image
                    src="/images/flagIcon.svg"
                    alt="icon"
                    width={12}
                    height={7.2}
                  />
                </div>
              </div>
              <div className="ml-5 mr-1">{`+${elem.phoneCode}`} </div>
            </div>
          )
      )}
    </>
  )
}
