import React, { useState } from 'react'
import Modal from './Modal'
const Footer = () => {
  const [show, setShow] = useState(false)
  return (
    <footer className='footer text-center ml-md-n5'>
      <button
        onClick={() => setShow(true)}
        className='rules text-uppercase mt-md-n5'
      >
        Rules
      </button>
      <Modal show={show} setShow={setShow} />
    </footer>
  )
}

export default Footer
