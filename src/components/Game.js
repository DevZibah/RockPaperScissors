import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import paperimg from '../assets/icon-paper.svg'
import scissorsimg from '../assets/icon-scissors.svg'
import rockimg from '../assets/icon-rock.svg'

const Game = ({ select, setScore, score }) => {
  const [house, setHouse] = useState('')
  const [winlose, setWinlose] = useState('')
  const [counter, setCounter] = useState(3)
  const [playagain, setPlayagain] = useState('')
  const houseSelect = () => {
    const houseChoices = [paperimg, scissorsimg, rockimg]
    setHouse(houseChoices[Math.floor(Math.random() * 3)])
  }
  useEffect(() => {
    houseSelect()
  }, [])

  const winOrlose = () => {
    if (select === paperimg && house === rockimg) {
      setWinlose('You win')
      setScore(score + 1)
      setPlayagain('Play Again')
    } else if (select === paperimg && house === scissorsimg) {
      setWinlose('You lose')
      setScore(score - 1)
      setPlayagain('Play Again')
    } else if (select === rockimg && house === scissorsimg) {
      setWinlose('You win')
      setScore(score + 1)
      setPlayagain('Play Again')
    } else if (select === rockimg && house === paperimg) {
      setWinlose('You lose')
      setScore(score - 1)
      setPlayagain('Play Again')
    } else if (select === scissorsimg && house === paperimg) {
      setWinlose('You win')
      setScore(score + 1)
      setPlayagain('Play Again')
    } else if (select === scissorsimg && house === rockimg) {
      setWinlose('You lose')
      setScore(score - 1)
      setPlayagain('Play Again')
    } else {
      setWinlose('Draw')
      setPlayagain('Play Again')
    }
  }

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1)
          }, 1000)
        : winOrlose()

    return () => {
      clearInterval(timer)
    }
  }, [counter, house])

  return (
    <div className='mt-5 game'>
      <div className='text-uppercase text-center row mt-md-2 gamme'>
        <div className='col-6 player'>
          <small>you picked</small>
        </div>
        <div className='col-6 house'>
          <small>the house picked</small>
        </div>
      </div>
      <div className='row text-center mt-md-4'>
        <div className='col-6 col-md-4'>
          <img
            className='icon4 p-4 p-md-5'
            style={
              select === paperimg
                ? {
                    border: '15px solid var(--PaperGradient)',
                    boxShadow:
                      'inset 0px 5px 4px grey, 0px 5px var(--PaperGradient)',
                  }
                : select === scissorsimg
                ? {
                    border: '15px solid var(--ScissorsGradient)',
                    boxShadow:
                      'inset 0px 5px 4px grey, 0px 5px var(--ScissorsGradient)',
                  }
                : select === rockimg
                ? {
                    border: '15px solid var(--RockGradient)',
                    boxShadow:
                      'inset 0px 5px 4px grey, 0px 5px var(--RockGradient)',
                  }
                : {}
            }
            src={select}
            alt='Player selection'
          />
        </div>
        <div className='mt-5 text-center text-uppercase winlosee winlose-one col-md-4'>
          <div className='winlose'>
            <p>{winlose}</p>
          </div>
          <Link to='/'>
            <button className='w-50 p-2 border pA'>{playagain}</button>
          </Link>
        </div>
        <div className='col-6 col-md-4'>
          {counter == 0 ? (
            <img
              style={
                house === paperimg
                  ? {
                      border: '15px solid var(--PaperGradient)',
                      boxShadow:
                        'inset 0px 5px 4px grey, 0px 5px var(--PaperGradient)',
                    }
                  : house === scissorsimg
                  ? {
                      border: '15px solid var(--ScissorsGradient)',
                      boxShadow:
                        'inset 0px 5px 4px grey, 0px 5px var(--ScissorsGradient)',
                    }
                  : house === rockimg
                  ? {
                      border: '15px solid var(--RockGradient)',
                      boxShadow:
                        'inset 0px 5px 4px grey, 0px 5px var(--RockGradient)',
                    }
                  : {}
              }
              className='icon4 p-4 p-md-5'
              src={house}
              alt='house selection'
            />
          ) : (
            <div className='counter'>{counter}</div>
          )}
        </div>
      </div>
      <div className='text-uppercase text-center row mt-4 game-one'>
        <div className='col-6'>
          <small>you picked</small>
        </div>
        <div className='col-6'>
          <small>the house picked</small>
        </div>
      </div>
      <div className='mt-5 text-center text-uppercase winlosee'>
        <div className='winlose'>
          <p>{winlose}</p>
        </div>
        <Link to='/'>
          <button className='w-50 p-2 border pA'>Play Again</button>
        </Link>
      </div>
    </div>
  )
}

export default Game
