/*
to add:


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
import StoreItem from './components/StoreItem'
import Navbar from './components/Navbar'

function App() {
  //state
  const [burgerCount, setBurgerCount] = useState(0);
  const [displayedBurgerCount, setDisplayedBurgerCount] = useState(0);
  const [burgersMadeFromClicking, setBurgersMadeFromClicking] = useState(0);
  const [burgersMadeFromAutomation, setBurgersMadeFromAutomation] = useState(0);
  const [burgersPerClick, setBurgersPerClick] = useState(1);
  const [burgersPerSecond, setBurgersPerSecond] = useState(0);

  const [workers, setWorkers] = useState(0);

  //useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setBurgerCount(prevBurgerCount => prevBurgerCount + (burgersPerSecond / 10));
    }, 100);

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, [burgersPerSecond]);
  useEffect(() => {
    setDisplayedBurgerCount(Math.floor(burgerCount))
  }, [burgerCount])

  const [playBorgirSound] = useSound(borgir)

  return (
    <>
      <div className='parent'>
        <div className='div1' id='burger'>
          <Burger
            burgerCount={burgerCount}
            displayedBurgerCount={displayedBurgerCount}
            setBurgerCount={setBurgerCount}
            burgersPerClick={burgersPerClick}
            setBurgersPerClick={setBurgersPerClick}
            burgersPerSecond={burgersPerSecond}
            setBurgersPerSecond={setBurgersPerSecond}
            burgersMadeFromClicking={burgersMadeFromClicking}
            setBurgersMadeFromClicking={setBurgersMadeFromClicking}
            burgersMadeFromAutomation={burgersMadeFromAutomation}
            setBurgersMadeFromAutomation={setBurgersMadeFromAutomation}
            burgerpic={burgerpic}

          />
        </div>
        <div className='div2'>
          <p>div2 - navbar</p>
          <Navbar />
        </div>
        <div className='div3'>
          <p>div3</p>
        </div>
        <div className='div4'>

          <section className="section">
            store

          </section>
          <section className="section1">
            {/*classname section1 - create and map currentstoreitems array and state*/}
            <StoreItem

            />
            <StoreItem

            />
            <StoreItem

            />
            <StoreItem

            />
          </section>
          <section className="section2">
            classname section2
          </section>
        </div>
        <div className='div5'>
          <p>test console</p>
          <TestConsoleButton
            buttontext="set burgers/second to 0"
            functionarg={0}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext='+1 burger/second'
            functionarg={prev => prev + 1}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext='+100 burger/second'
            functionarg={prev => prev + 100}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext='+1000 burger/second'
            functionarg={prev => prev + 1000}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext="+10 million burger/second"
            functionarg={prev => prev + 10000000}
            buttonfunc={setBurgersPerSecond}
          />
          <TestConsoleButton
            buttontext="+1 burger per click"
            functionarg={prev => prev + 1}
            buttonfunc={setBurgersPerClick}
          />
          <TestConsoleButton
            buttontext="+1000 burger per click"
            functionarg={prev => prev + 1000}
            buttonfunc={setBurgersPerClick}
          />
          <TestConsoleButton
            buttontext="+10000 burger per click"
            functionarg={prev => prev + 10000}
            buttonfunc={setBurgersPerClick}
          />
          <TestConsoleButton
            buttontext="+1 billion burger per click"
            functionarg={prev => prev + 1000000000}
            buttonfunc={setBurgersPerClick}
          />
          <TestConsoleButton
            buttontext="borgir :)"
            functionarg={""}
            buttonfunc={playBorgirSound}
          />
        </div>

      </div>
    </>
  )
}

export default App
