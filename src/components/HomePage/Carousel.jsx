import React, { useEffect, useState } from 'react'
import { data } from '../consts'

function Carousel() {
  const { slidingData } = data
  const [percent, setPercent] = useState(0)
  const [prevPercent, setPrevPercent] = useState(0)
  console.log(percent)
  console.log('prevPercent', prevPercent)
  useEffect(() => {
    if (percent < slidingData.length * 100) {
      const timer = setTimeout(() => {
        setPercent((percent += 100))
      }, 7000)
    } else {
      setPercent(0)
    }
    setPrevPercent(percent)

    return () => clearTimeout(timer)
  })

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex overflow-hidden max-w-full min-w-full">
        {slidingData.map((elem, index) => {
          return (
            <div
              style={{ transform: `translate(-${percent}%)` }}
              key={elem.id}
              className={`min-w-full max-w-full ease-out ${
                percent - prevPercent !== 100 ? 'duration-100' : 'duration-500'
              } ${
                percent - prevPercent !== -100 ? 'duration-100' : 'duration-500'
              }`}
            >
              <div className="bg-blue p-6 h-580 ml-1 rounded-2xl md:ml-2 md:mr-2 md:px-24 md:h-474 md:pt-20 lg:pl-40 xl:pl-48">
                <h2 className="font-semibold text-5xl text-white mb-6">
                  {elem.title}
                </h2>
                <ul className="list-disc list-outside ml-6">
                  {elem.text.map((liText, index) => {
                    return (
                      <li key={index} className="text-white leading-7">
                        {liText}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center p-0 mt-6">
        {slidingData.map((elem) => {
          return (
            <div
              type="radio"
              name="checkBox"
              key={elem.id}
              onClick={() => setPercent(elem.id * 100)}
              className={`w-4 h-4 rounded-full cursor-pointer ml-2 mr-2 duration-500 
                ${elem.id * 100 === percent ? 'bg-blue' : 'bg-checkBox'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(Carousel)
