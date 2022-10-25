import React from 'react'
import Image from 'next/image'
import Border1 from '../../../public/images/border1.svg'
import Border2 from '../../../public/images/border2.svg'
import styles from '../../styles/Header.module.scss'

export default function MobileIcon({ openMobileNav, showMobNav }) {
  return (
    <div className="flex justify-center col-start-4">
      <div
        onClick={openMobileNav}
        className="h-1 text-center cursor-pointer mt-4"
      >
        <div className={`${showMobNav ? styles.mobIcon1 : styles.mobIcon} h-3`}>
          <Image src={Border1} alt="border" />
        </div>
        <div
          className={`${
            showMobNav ? styles.mobIconRotate2 : styles.mobIconRotate1
          } ml-4`}
        >
          <Image src={Border2} alt="border" />
        </div>
      </div>
    </div>
  )
}
