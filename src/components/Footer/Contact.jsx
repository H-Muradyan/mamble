import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contacts({ contacts }) {
  return (
    <div className="col-start-1 col-span-3 md:col-start-5 lg:col-start-10">
      <p className="text-white mb-6 font-semibold text-lg mt-20 lg:mt-0">
        Contacts
      </p>
      {contacts.map((elem) => {
        return (
          <div key={elem.id} className="flex items-center mt-4">
            <div className="w-6">
              <Image src={elem.image} alt="icon" />
            </div>
            <div className="w-80 ml-3">
              <Link href={elem.link}>
                <a target="_blank" className="text-white">
                  {elem.text}
                </a>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
