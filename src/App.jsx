/*


*/

import { useState, useEffect } from 'react'
import './App.css'

//image imports
import burgerpic from "./assets/images/burger.jpeg"
import workerpic from "./assets/images/worker.jpeg"

//component imports
import Burger from './components/Burger'


function App() {
  const [burgerCount, setBurgerCount] = useState(0)
  const [burgersPerClick, setBurgersPerClick] = useState(1);

  const [workers, setWorkers] = useState(0)


  return (
    <>
      <div className="parent">
        <div className="div1" id="burger">
          <Burger
            burgerCount={burgerCount}
            setBurgerCount={setBurgerCount}
            burgersPerClick={burgersPerClick}
            setBurgersPerClick={setBurgersPerClick}

            burgerpic={burgerpic}


          />
        </div>
        <div className="div2">
          <p>div2</p>
        </div>
        <div className="div3">
          <p>div3</p>
        </div>
        <div className="div4">
          <p>div4</p>
        </div>
        <div className="div5">
          <p>div5</p>
        </div>

      </div>
    </>
  )
}

export default App
