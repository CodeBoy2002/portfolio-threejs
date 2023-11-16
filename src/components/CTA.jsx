import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>I'd love to connect for a more in-depth discussion. <br className='sm:black hidden' />
      Let's talk!</p>
      <Link to="/contact" className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA