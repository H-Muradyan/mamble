import React, { useState } from 'react'
import Contacts from './Contact'
import FinalPart from './FinalPart'
import FooterLogo from './FooterLogo'
import Pages from './Pages'
import { data } from '../consts'
import SocialPages from './SocialPages'

export default function Footer() {
  const [footerData, setFooterdata] = useState(data.footerData)

  return (
    <footer className="bg-blue">
      <div className="max-w-screen-2xl grid grid-cols-4 gap-x-5 pt-16 mx-8 md:grid-cols-8 lg:grid-cols-12 xl:mx-40 2xl:mx-56">
        <FooterLogo />
        <Pages pages={footerData.pages} />
        <Contacts contacts={footerData.contacts} />
        <SocialPages socialPages={footerData.socialPages} />
      </div>
      <FinalPart />
    </footer>
  )
}
