import React from 'react'
import Image from 'next/image'
import HeadLogo from '../../../public/images/headLogo.svg'
import Link from 'next/dist/client/link'

export default function HeaderLogo() {
  return (
    <div className="flex col-start-1 items-center cursor-pointer">
      <Link href="/">
        <a>
          <Image src={HeadLogo} alt="logo" />
        </a>
      </Link>
    </div>
  )
}
