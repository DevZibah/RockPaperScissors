import React from 'react'
import { Link } from 'react-router-dom'
import paperimg from '../assets/icon-paper.svg'
import scissorsimg from '../assets/icon-scissors.svg'
import rockimg from '../assets/icon-rock.svg'
import triangle from '../assets/bg-triangle.svg'
const Selectgame = ({ setSelect }) => {
  const paperClick = () => {
    setSelect(paperimg)
    // console.log('paper')
  }
  const scissorsClick = () => {
    setSelect(scissorsimg)
    // console.log('scissors')
  }
  const rockClick = () => {
    setSelect(rockimg)
    // console.log('rock')
  }

  return (
    <div className='mt-5 selectgame'>
      <div className='text-center'>
        <img className='w-50 mt-5 triangle' src={triangle} alt='Triangle' />
      </div>
      <div className='row paperSc text-center'>
        <div className='col-6 text-center'>
          <Link to='/Game'>
            <img
              className='icon1 p-4 ml-md-4'
              onClick={paperClick}
              src={paperimg}
              alt='paper'
            />
          </Link>
        </div>
        <div className='col-6'>
          <Link to='/Game'>
            <img
              className='icon2 p-4 ml-md-n4'
              onClick={scissorsClick}
              src={scissorsimg}
              alt='scissors'
            />
          </Link>
        </div>
      </div>
      <div className='text-center mt-n5 rock'>
        <Link to='/Game'>
          <img
            className='icon3 p-4'
            onClick={rockClick}
            src={rockimg}
            alt='rock'
          />
        </Link>
      </div>
    </div>
  )
}

export default Selectgame
