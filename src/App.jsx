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
import pointer from './assets/images/pointer.png'


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
  //reflects player's current amount of burgers
  const [burgerCount, setBurgerCount] = useState(0);
  //displayed count is burger count rounded down to the nearest int
  const [displayedBurgerCount, setDisplayedBurgerCount] = useState(0);
  //
  const [totalBurgersProduced, setTotalBurgersProduced] = useState(0);
  const [burgersMadeFromClicking, setBurgersMadeFromClicking] = useState(0);
  const [burgersMadeFromAutomation, setBurgersMadeFromAutomation] = useState(0);
  const [burgersPerClick, setBurgersPerClick] = useState(1);
  const [burgersPerSecond, setBurgersPerSecond] = useState(0);


  const [pointerCount, setPointerCount] = useState(0);

  //helper functions 
  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(3) + " billion";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(3) + " million";
    } else {
      return number.toFixed(0);
    }
  }

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

  useEffect(() => {
    //why does burgers from automation need to be multiplied by 2?
    setTotalBurgersProduced(formatNumber(((burgersMadeFromClicking) + (burgersMadeFromAutomation * 2))))
  }, [burgersMadeFromClicking, burgersMadeFromAutomation])

  const [playBorgirSound] = useSound(borgir);

  return (
    <>
      <div className='parent'>
        <div className='div1' id='burger'>
          <Burger
            totalBurgersProduced={totalBurgersProduced}
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
          {/*
          - will display rows of upgrades/buildings
          - 
          */}
        </div>
        <div className='div4'>

          <section className="section">
            store

          </section>
          <section className="section1">
            {/*classname section1 - create and map currentstoreitems array and state*/}
            <StoreItem
              storeItemImage={pointer}
              storeItemName="pointer"
              storeItemPrice={15}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              pointerCount={pointerCount}
              setPointerCount={setPointerCount}
              bpsIncrease={1}
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
