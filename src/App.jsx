/*
to add:
  - clicking buttons in navbar should control a state variable (default = buildings)
    - this state variable should conditionally render in div 3:
      - options screen
      - stats screen
      - info screen
      - legacy screen
  - pressing X on any of these screens should revert value back to game screen
*/

//style imports
import './App.css'

//hook imports
import { useState, useEffect } from 'react'
import useSound from 'use-sound'

//image import
import burgerpic from './assets/images/burger.jpeg'
import workerpic from './assets/images/worker_small.jpeg'
import pointerpic from './assets/images/pointer.png'
import grillpic from './assets/images/grill_small.jpeg'
import questionmarkpic from './assets/images/questionmark_small.jpeg'
import bankpic from './assets/images/bank_small.jpeg'


//sfx imports
import borgir from './assets/sfx/borgir.mp3'

//music imports

//component imports
import Burger from './components/Burger'
import TestConsoleButton from './components/TestConsoleButton'
import StoreItem from './components/StoreItem'
import Navbar from './components/Navbar'
import APIfetcher from './components/APIfetcher'
import Buildings from './components/Buildings'
import Options from './components/Options'
import Stats from './components/Stats'
import Info from './components/Info'
import Legacy from './components/Legacy'



function App() {
  //state

  //state for main area (game, options, stats, info, legacy)
  const [mainArea, setMainArea] = useState("buildings");


  //reflects player's current amount of burgers (burgers in bank)
  const [burgerCount, setBurgerCount] = useState(0);
  //displayed count is burger count rounded down to the nearest int
  const [displayedBurgerCount, setDisplayedBurgerCount] = useState(0);
  //
  const [totalBurgersProduced, setTotalBurgersProduced] = useState(0);
  const [burgersMadeFromClicking, setBurgersMadeFromClicking] = useState(0);
  const [burgersMadeFromAutomation, setBurgersMadeFromAutomation] = useState(0);
  const [burgersPerClick, setBurgersPerClick] = useState(1);
  const [burgersPerSecond, setBurgersPerSecond] = useState(0);

  //state for store items
  // BPS = burgers per second
  const [pointerCount, setPointerCount] = useState(0);
  const [pointerBPS, setPointerBPS] = useState(1);
  const [workerCount, setWorkerCount] = useState(0);
  const [workerBPS, setWorkerBPS] = useState(2);
  const [grillCount, setGrillCount] = useState(0);
  const [grillBPS, setGrillBPS] = useState(3)
  const [bankCount, setBankCount] = useState(0);
  const [bankBPS, setBankBPS] = useState(4);

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
        <div className='div2' id='navbar'>
          <Navbar
            setMainArea={setMainArea}
          />
        </div>
        <div className='div3' id='gamearea'>
          {mainArea === "buildings" &&
            <Buildings />
          }
          {mainArea === "options" &&
            <Options />
          }
          {mainArea === "stats" &&
            <Stats
              totalBurgersProduced={totalBurgersProduced}
              burgersMadeFromClicking={burgersMadeFromClicking}
              burgersMadeFromAutomation={Math.floor(burgersMadeFromAutomation * 2)}
              burgersPerClick={burgersPerClick}
            />
          }
          {mainArea === "info" &&
            <Info />
          }
          {mainArea === "legacy" &&
            <Legacy />
          }
          {mainArea === "testconsole" &&
            <>
              <Stats
                totalBurgersProduced={totalBurgersProduced}
                burgersMadeFromClicking={burgersMadeFromClicking}
                burgersMadeFromAutomation={Math.floor(burgersMadeFromAutomation * 2)}
                burgersPerClick={burgersPerClick}
              />
              <div>
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
            </>
          }

        </div>
        <div className='div4'>

          <section className="section">
            store

          </section>
          <section className="section1" id="upgrades">
            {/*classname section1 - create and map currentstoreitems array and state*/}
            <APIfetcher />


          </section>
          <section className="section2" id="buildings">
            <StoreItem
              storeItemImage={totalBurgersProduced >= 15 ? pointerpic : questionmarkpic}
              storeItemName={totalBurgersProduced >= 15 ? "pointer" : "???"}
              storeItemPrice={15 + (pointerCount * pointerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={pointerCount}
              itemSetter={setPointerCount}
              bpsIncrease={pointerBPS}
            />
            <StoreItem
              storeItemImage={totalBurgersProduced >= 30 ? workerpic : questionmarkpic}
              storeItemName={totalBurgersProduced >= 30 ? "worker" : "???"}
              storeItemPrice={30 + (workerCount * workerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={workerCount}
              itemSetter={setWorkerCount}
              bpsIncrease={workerBPS}
            />
            {totalBurgersProduced >= 30 && <StoreItem
              storeItemImage={totalBurgersProduced >= 45 ? grillpic : questionmarkpic}
              storeItemName={totalBurgersProduced >= 45 ? "grill" : "???"}
              storeItemPrice={45 + (grillCount * grillCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={grillCount}
              itemSetter={setGrillCount}
              bpsIncrease={grillBPS}
            />}
            {totalBurgersProduced >= 45 && <StoreItem
              storeItemImage={totalBurgersProduced >= 60 ? bankpic : questionmarkpic}
              storeItemName={totalBurgersProduced >= 60 ? "bank" : "???"}
              storeItemPrice={60 + (bankCount * bankCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={bankCount}
              itemSetter={setBankCount}
              bpsIncrease={bankBPS}
            />}

          </section>
        </div>
        <div className='div5'>

        </div>

      </div>
    </>
  )
}

export default App
