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
import workerpic from './assets/images/worker_small.jpeg'
import pointerpic from './assets/images/pointer.png'
import grillpic from './assets/images/grill_small.jpeg'
import questionmarkpic from './assets/images/questionmark_small.jpeg'


//sfx imports
import borgir from './assets/sfx/borgir.mp3'



//music imports

//component imports
import Burger from './components/Burger'
import TestConsoleButton from './components/TestConsoleButton'
import StoreItem from './components/StoreItem'
import Navbar from './components/Navbar'
import APIfetcher from './components/APIfetcher'


function App() {
  //state
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
  const [pointerCount, setPointerCount] = useState(0);
  const [workerCount, setWorkerCount] = useState(0);
  const [grillCount, setGrillCount] = useState(0);

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
            <APIfetcher />


          </section>
          <section className="section2">
            {/*
          store item logic to implement:
          - store items can have three states:
            - S1)totally hidden (not visible at all to player)
            - S2)showing, but name="???" and picture of item is just silhouette(for now use question mark as placeholder)
            - S3)showing normally 
          - at the start of the game, pointer and worker are in state 2
            - everything else is in state 1
          - once totalburgersproduced > pointer cost, it changes to s3 permanently
            - then the next item shows up in S2
            - this pattern repeats as the player's TBP increases
            
        */}


            <StoreItem
              storeItemImage={pointerpic}
              storeItemName="pointer"
              storeItemPrice={15 + (pointerCount * pointerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={pointerCount}
              itemSetter={setPointerCount}
              bpsIncrease={1}
            />
            <StoreItem
              storeItemImage={workerpic}
              storeItemName="worker"
              storeItemPrice={30 + (workerCount * workerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={workerCount}
              itemSetter={setWorkerCount}
              bpsIncrease={2}
            />
            <StoreItem
              storeItemImage={grillpic}
              storeItemName="grill"
              storeItemPrice={45 + (grillCount * grillCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={grillCount}
              itemSetter={setGrillCount}
              bpsIncrease={3}
            />
            <StoreItem
              storeItemImage={grillpic}
              storeItemName="grill"
              storeItemPrice={45 + (grillCount * grillCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={grillCount}
              itemSetter={setGrillCount}
              bpsIncrease={3}
            />
            <StoreItem
              storeItemImage={grillpic}
              storeItemName="grill"
              storeItemPrice={45 + (grillCount * grillCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={grillCount}
              itemSetter={setGrillCount}
              bpsIncrease={3}
            />
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
