import React from 'react'
import world from '../world.svg'

const CenterBottom = () => {
  return (
    <div className='center__bottom'>
      <h2>Start your business journey with Soprano</h2>
      <p>
        Try Shopify for free, and explore all the tools and services you need to
        start, run, and grow your business.
      </p>

      <div className='center__bottomContent'>
        <img src={world} alt='' />
        <h4>Move Your Business Online</h4>
        <p>
          Create a business, whether you’ve got a fresh idea or are looking for
          a new way to make money.
        </p>
      </div>
      <hr />
    </div>
  )
}

export default CenterBottom
