import { Switch, Route } from 'react-router-dom'
import './style/All.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Selectgame from './components/Selectgame'
import Game from './components/Game'
import { useState } from 'react/cjs/react.development'
import Modal from './components/Modal'
const App = () => {
  const [score, setScore] = useState(0)
  const [select, setSelect] = useState('')
  return (
    <div className='App'>
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

export default App
