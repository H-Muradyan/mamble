import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Layout({ children }) {
  return (
    <>
      <div className="pb-88">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  )
}
