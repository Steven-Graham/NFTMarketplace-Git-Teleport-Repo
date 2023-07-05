import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import './figma-import.css'

const FigmaImport = (props) => {
  return (
    <div className="figma-import-container">
      <Helmet>
        <title>Figma-Import - Character NFT template</title>
        <meta
          property="og:title"
          content="Figma-Import - Character NFT template"
        />
      </Helmet>
      <Player
        src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
        speed="1"
        autoplay
        background="transparent"
        className="figma-import-lottie-node"
      ></Player>
    </div>
  )
}

export default FigmaImport
