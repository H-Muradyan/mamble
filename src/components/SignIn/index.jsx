import React, { useState } from 'react'
import Button from '../shared/inputs/Button'
import Link from 'next/link'

export default function SignInSection() {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => {}
  return (
    <div className="my-40">
      <Link href="/sign-up">
        <a className="bg-blue py-3 px-6  rounded-full text-white hover:shadow-shadow active:bg-darkBlue">
          Agree
        </a>
      </Link>
    </div>
  )
}
