import React from 'react'

const Header = ({ score }) => {
  return (
    <div className='row p-2 p-md-3 header mt-md-n5'>
      <div className='col-6 text-uppercase first-div'>
        <h6 className='mt-3 mt-md-2'>rock</h6>
        <h6>paper</h6>
        <h6>scissors</h6>
      </div>
      <div className='col-6 text-center'>
        <div className='second-div border border-dark ml-5 w-75 text-end bg-white'>
          <p className='mt-2 div-pp mt-md-3'>score</p>
          <p className='div-p'>{score}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
