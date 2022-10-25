import React from 'react'
import Image from 'next/dist/client/image'

export default function DropDownList({ telCountries, chooseCountry }) {
  return (
    <div className="relative">
      <div
        className={`absolute w-full ${
          telCountries.length > 4 && 'overflow-y-scroll h-48'
        }`}
      >
        {telCountries
          .filter((el) => !el.isVisible)
          .map((elem) => {
            return (
              <div
                key={elem.id}
                onClick={() =>
                  chooseCountry({ ...elem, isVisible: !elem.isVisible })
                }
                className="cursor-pointer w-full px-4 py-3 bg-white rounded-lg outline-none flex items-center shadow-flagsBorderShadow hover:bg-dropDownGrey"
              >
                <Image src={elem.flag} alt="flag" width={24} height={16} />
                <span className="ml-4">{elem.countryName}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}
