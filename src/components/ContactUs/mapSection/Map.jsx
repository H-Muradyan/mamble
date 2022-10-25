import React from 'react'
import { mapLocation } from '../../consts'

export default function Map() {
  return (
    <div className="h-72 lg:h-full md:mb-16 col-span-4 md:col-span-8 lg:col-span-5">
      <iframe className="h-full w-full" src={mapLocation} />
    </div>
  )
}
