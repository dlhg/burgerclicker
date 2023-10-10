/*


*/

//style imports
import './App.css'

//hook imports
import { useState, useEffect } from 'react'
import useSound from 'use-sound'

//image import
import burgerpic from './assets/images/burger.jpeg'
import workerpic from './assets/images/worker.jpeg'

//sfx imports
import borgir from './assets/sfx/borgir.mp3'

//music imports

//component imports
import Burger from './components/Burger'
import TestConsoleButton from './components/TestConsoleButton'



function App() {
  const [burgerCount, setBurgerCount] = useState(0);
  const [burgersPerClick, setBurgersPerClick] = useState(1);
  const [burgersPerSecond, setBurgersPerSecond] = useState(0);

  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBurgerCount(prevBurgerCount => prevBurgerCount + burgersPerSecond);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, [burgersPerSecond]);




  return (
    <>
      <div className='parent'>
        <div className='div1' id='burger'>
          <Burger
            burgerCount={burgerCount}
            setBurgerCount={setBurgerCount}
            burgersPerClick={burgersPerClick}
            setBurgersPerClick={setBurgersPerClick}
            burgersPerSecond={burgersPerSecond}
            setBurgersPerSecond={setBurgersPerSecond}
            burgerpic={burgerpic}

          />
        </div>
        <div className='div2'>
          <p>div2</p>
        </div>
        <div className='div3'>
          <p>div3</p>
        </div>
        <div className='div4'>
          <p>div4</p>
        </div>
        <div className='div5'>
          <p>div5</p>
        </div>
        <div className='div6'>
          <p>test console</p>
          <TestConsoleButton
            buttontext='+1 burger/second'
            functionarg={prev => prev + 1}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext="set burgers/second to 0"
            functionarg={0}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext="+10000000 burger/second"
            functionarg={prev => prev + 10000000}
            buttonfunc={setBurgersPerSecond}
          />
        </div>

      </div>
    </>
  )
}

export default App
