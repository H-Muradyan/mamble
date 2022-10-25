import React from 'react'
import Map from './Map'
import ContactLinks from './ContactLinks'

export default function MapSection() {
  return (
    <div className="max-w-screen-2xl m-auto grid grid-cols-4 gap-x-4 px-4 pt-16 pb-28 mb-36 md:px-8 lg:py-52 xl:py-44 2xl:py-32 md:grid-cols-8 xl:gap-x-6 lg:grid-cols-12 xl:px-40 2xl:px-56">
      <Map />
      <ContactLinks />
    </div>
  )
}
