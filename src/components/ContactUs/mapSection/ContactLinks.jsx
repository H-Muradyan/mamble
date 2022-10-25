import React from 'react'
import { data } from '../../consts'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactLinks() {
  const { contacts } = data.footerData
  return (
    <div className="col-span-4 md:col-span-8 lg:col-start-7 lg:col-span-6 my-12">
      <h1 className="text-2xl text-white mb-10">Get in touch</h1>
      {contacts.length > 0
        ? contacts.map((elem) => {
            return (
              <div key={elem.id} className="flex items-center mt-9">
                <div className="w-6">
                  <Image src={elem.image} alt="icon" />
                </div>
                <div className="ml-3">
                  <Link href={elem.link}>
                    <a target="_blank" className="text-white">
                      {elem.text}
                    </a>
                  </Link>
                </div>
              </div>
            )
          })
        : null}
    </div>
  )
}
