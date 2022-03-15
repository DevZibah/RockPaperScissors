import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Selectgame from './Selectgame'
import Game from './Game'
const All = () => {
  const [score, setScore] = useState(0)
  const [select, setSelect] = useState('')
  return (
    <div>
      <div>
        <Header score={score} />
      </div>
      <Switch>
        <Route exact path='/'>
          <Selectgame setSelect={setSelect} />
        </Route>
        <Route exact path='/Game'>
          <Game select={select} setScore={setScore} score={score} />
        </Route>
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default All
