import React from 'react'

export default function Button({ value }) {
  return (
    <div className="grid col-span-full lg:col-span-9 justify-items-end">
      <button className="bg-blue py-3 px-6 rounded-full text-white hover:shadow-shadow active:bg-darkBlue cursor-pointer">
        {value}
      </button>
    </div>
  )
}
