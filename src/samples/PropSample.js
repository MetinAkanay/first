import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function PropSample() {

  let headerText = "Merhaba Header. Ben Parent Component'in App.js'den gelen bir yazıyım"
  let mainText = "Merhaba Main. Ben Parent Component'in App.js'den gelen bir yazıyım"
  let footerText = "Merhaba Footer. Ben Parent Component'in App.js'den gelen bir yazıyım"

  return (
    <>
      <Header yazi={headerText} />
      <Main yazi2={mainText} />
      <Footer footerText={footerText} myAge={22} />
    </>
  )
}

export default PropSample