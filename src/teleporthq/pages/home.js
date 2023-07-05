import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nimble Lawful Seal</title>
        <meta property="og:title" content="Nimble Lawful Seal" />
      </Helmet>
    </div>
  )
}

export default Home
