import React, { useState } from 'react'
import Faq from './Faq'
import Hero from './Hero'
import Members from './Members'
import Sticky from './Sticky'
import { data } from '../consts'
import Carousel from './Carousel'

export default function Home() {
  const [faqData, setFaqData] = useState(data.faqData)

  const handleChange = (newData) => {
    setFaqData(
      faqData.map((elem) => {
        if (elem.id === newData.id) {
          return newData
        }
        return elem
      })
    )
  }

  return (
    <>
      <div className="max-w-screen-2xl flex justify-center mx-8 xl:mx-40 2xl:mx-56">
        <Hero />
      </div>
      <div className="bg-borderColor">
        <div className="max-w-screen-2xl grid grid-cols-4 gap-x-4 mx-8 md:grid-cols-8 xl:gap-x-6 lg:grid-cols-12 xl:mx-40 2xl:mx-56">
          <Sticky />
        </div>
      </div>
      <div className="max-w-screen-2xl px-8 xl:px-40 2xl:px-56 m-auto">
        <Carousel />
      </div>
      <div className="max-w-screen-2xl grid grid-cols-4 gap-x-4 mx-8 md:grid-cols-8 lg:grid-cols-12 xl:mx-40 xl:gap-x-6 2xl:mx-56">
        <Faq faqData={faqData} handleChange={handleChange} />
        <Members />
      </div>
    </>
  )
}
