import React from 'react'
import Image from 'next/image'
import FootLogo from '../../../public/images/footLogo.svg'
import Link from 'next/dist/client/link'

export default function FooterLogo() {
  return (
    <div className="mb-20 col-span-2 lg:col-start-2">
      <div className="cursor-pointer">
        <Link href="/">
          <a>
            <Image src={FootLogo} alt="logo" />
          </a>
        </Link>
      </div>
    </div>
  )
}
