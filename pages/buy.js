import React from 'react'
import Head from 'next/head'

const Buy = (props) => {
  return (
    <>
      <div className="buy-container">
        <Head>
          <title>Buy - Geosquare</title>
          <meta property="og:title" content="Buy - Geosquare" />
        </Head>
        <h1>Hii this is a github teleport sync testing </h1>
        <iframe
          src="https://www.youtube.com/embed/DeQkMK5LME4"
          className="buy-iframe"
        ></iframe>
      </div>
      <style jsx>
        {`
          .buy-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .buy-iframe {
            width: 1106px;
            height: 554px;
          }
        `}
      </style>
    </>
  )
}

export default Buy
