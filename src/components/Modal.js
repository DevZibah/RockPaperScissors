import React from 'react'
import close from '../assets/icon-close.svg'
import rules from '../assets/image-rules.svg'

const Modal = ({ show, setShow }) => {
  if (!show) {
    return null
  }
  return (
    <div className='modal p-3'>
      <div className='modal-content'>
        <div className='modal-body text-center'>
          <div className='text-uppercase rules-one text-center'>
            <p>rules</p>
          </div>
          <div>
            <img src={rules} alt='' />
          </div>
          <img className='mt-5' onClick={() => setShow(false)} src={close} alt='close' />
        </div>
      </div>
    </div>
  )
}

export default Modal
