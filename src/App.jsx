//style imports
import "./App.css";

//hook imports
import { useState, useEffect } from "react";
import useSound from "use-sound";

//image import
import burgerpic from "./assets/images/burger.jpeg";
import galaxyburgerpic from "./assets/images/galaxyburger.jpeg";
import transparentburger_smallpic from "./assets/images/transparentburger_small.png";
//store item images - buildings
import workerpic from "./assets/images/worker_small.jpeg";
import pointerpic from "./assets/images/pointer.png";
import grillpic from "./assets/images/grill_small.jpeg";
import questionmarkpic from "./assets/images/questionmark_small.jpeg";
import bankpic from "./assets/images/bank_small.jpeg";
import templepic from "./assets/images/temple_small.jpg";
import truckpic from "./assets/images/truck_small.jpg";
import labpic from "./assets/images/lab_small.jpg";
import spacecraftpic from "./assets/images/spacecraft_small.jpg";
//store item images - upgrades
import cat from "./assets/images/cat_small.jpeg";

//sfx imports
import borgir from "./assets/sfx/borgir.mp3";

//music imports

//component imports
import Burger from "./components/Burger";
import TestConsoleButton from "./components/TestConsoleButton";
import StoreItem from "./components/StoreItem";
import Navbar from "./components/Navbar";
import APIfetcher from "./components/APIfetcher";
import Buildings from "./components/Buildings";
import Options from "./components/Options";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Legacy from "./components/Legacy";
import UpgradeItem from "./components/UpgradeItem";
import FallingImages from "./components/FallingImages";

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
  const [totalBurgersProducedUnformatted, setTotalBurgersProducedUnformatted] =
    useState(0);
  const [burgersMadeFromClicking, setBurgersMadeFromClicking] = useState(0);
  const [burgersMadeFromAutomation, setBurgersMadeFromAutomation] = useState(0);
  const [burgersPerClick, setBurgersPerClick] = useState(1);
  const [burgersPerSecond, setBurgersPerSecond] = useState(0);

  //state for store items
  // BPS = burgers per second
  const [pointerCount, setPointerCount] = useState(0);
  const [pointerBPS, setPointerBPS] = useState(1);
  const [workerCount, setWorkerCount] = useState(0);
  const [workerBPS, setWorkerBPS] = useState(5);
  const [grillCount, setGrillCount] = useState(0);
  const [grillBPS, setGrillBPS] = useState(10);
  const [truckCount, setTruckCount] = useState(0);
  const [truckBPS, setTruckBPS] = useState(25);
  const [bankCount, setBankCount] = useState(0);
  const [bankBPS, setBankBPS] = useState(50);
  const [templeCount, setTempleCount] = useState(0);
  const [templeBPS, setTempleBPS] = useState(100);
  const [labCount, setLabCount] = useState(0);
  const [labBPS, setLabBPS] = useState(500);
  const [spacecraftCount, setSpacecraftCount] = useState(0);
  const [spacecraftBPS, setSpaceCraftBPS] = useState(5000);

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
      setBurgerCount(
        (prevBurgerCount) => prevBurgerCount + burgersPerSecond / 10
      );
    }, 100);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [burgersPerSecond]);
  useEffect(() => {
    setDisplayedBurgerCount(Math.floor(burgerCount));
  }, [burgerCount]);

  useEffect(() => {
    setTotalBurgersProduced(
      formatNumber(burgersMadeFromClicking + burgersMadeFromAutomation)
    );
    setTotalBurgersProducedUnformatted(
      burgersMadeFromClicking + burgersMadeFromAutomation
    );
  }, [burgersMadeFromClicking, burgersMadeFromAutomation]);

  const [playBorgirSound] = useSound(borgir);

  return (
    <>
      <div className="parent">
        <div className="div1" id="burger">
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
        <div className="div2" id="navbar">
          <Navbar setMainArea={setMainArea} />
        </div>
        <div className="div3" id="gamearea">
          {mainArea === "buildings" && (
            <>
              <Buildings
                pointerpic={pointerpic}
                workerpic={workerpic}
                grillpic={grillpic}
                bankpic={bankpic}
                truckpic={truckpic}
                templepic={templepic}
                labpic={labpic}
                spacecraftpic={spacecraftpic}
                pointerCount={pointerCount}
                workerCount={workerCount}
                grillCount={grillCount}
                bankCount={bankCount}
                truckCount={truckCount}
                templeCount={templeCount}
                labCount={labCount}
                spacecraftCount={spacecraftCount}
              />
              <FallingImages img={transparentburger_smallpic} />
            </>
          )}
          {mainArea === "options" && <Options />}
          {mainArea === "stats" && (
            <Stats
              totalBurgersProduced={totalBurgersProduced}
              burgersMadeFromClicking={burgersMadeFromClicking}
              burgersMadeFromAutomation={Math.floor(
                burgersMadeFromAutomation * 2
              )}
              burgersPerClick={burgersPerClick}
            />
          )}
          {mainArea === "info" && <Info />}
          {mainArea === "legacy" && <Legacy />}
          {mainArea === "testconsole" && (
            <>
              <Stats
                totalBurgersProduced={totalBurgersProduced}
                burgersMadeFromClicking={burgersMadeFromClicking}
                burgersMadeFromAutomation={Math.floor(
                  burgersMadeFromAutomation * 2
                )}
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
                  buttontext="+1 burger/second"
                  functionarg={(prev) => prev + 1}
                  buttonfunc={setBurgersPerSecond}
                />
                <TestConsoleButton
                  buttontext="+100 burger/second"
                  functionarg={(prev) => prev + 100}
                  buttonfunc={setBurgersPerSecond}
                />
                <TestConsoleButton
                  buttontext="+1000 burger/second"
                  functionarg={(prev) => prev + 1000}
                  buttonfunc={setBurgersPerSecond}
                />
                <TestConsoleButton
                  buttontext="+10 million burger/second"
                  functionarg={(prev) => prev + 10000000}
                  buttonfunc={setBurgersPerSecond}
                />
                <TestConsoleButton
                  buttontext="+1 burger per click"
                  functionarg={(prev) => prev + 1}
                  buttonfunc={setBurgersPerClick}
                />
                <TestConsoleButton
                  buttontext="+1000 burger per click"
                  functionarg={(prev) => prev + 1000}
                  buttonfunc={setBurgersPerClick}
                />
                <TestConsoleButton
                  buttontext="+10000 burger per click"
                  functionarg={(prev) => prev + 10000}
                  buttonfunc={setBurgersPerClick}
                />
                <TestConsoleButton
                  buttontext="+1 billion burger per click"
                  functionarg={(prev) => prev + 1000000000}
                  buttonfunc={setBurgersPerClick}
                />
                <TestConsoleButton
                  buttontext="borgir :)"
                  functionarg={""}
                  buttonfunc={playBorgirSound}
                />
              </div>
            </>
          )}
        </div>
        <div className="div4">
          <section className="section1" id="upgrades">
            {/*classname section1 - create and map currentstoreitems array and state*/}
            <div>
              clicking these catburgers doesn't do anything yet, eventually this
              will be an upgrade store
            </div>
            <APIfetcher />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
            <UpgradeItem upgradeItemImage={cat} />
          </section>
          <section className="section2" id="buildings">
            <StoreItem
              storeItemImage={
                totalBurgersProducedUnformatted >= 15
                  ? pointerpic
                  : questionmarkpic
              }
              storeItemName={
                totalBurgersProducedUnformatted >= 15 ? "pointer" : "???"
              }
              storeItemPrice={15 + pointerCount * pointerCount}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={pointerCount}
              itemSetter={setPointerCount}
              bpsIncrease={pointerBPS}
            />
            <StoreItem
              storeItemImage={
                totalBurgersProducedUnformatted >= 75
                  ? workerpic
                  : questionmarkpic
              }
              storeItemName={
                totalBurgersProducedUnformatted >= 75 ? "worker" : "???"
              }
              storeItemPrice={75 + workerCount * workerCount}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={workerCount}
              itemSetter={setWorkerCount}
              bpsIncrease={workerBPS}
            />
            {totalBurgersProducedUnformatted >= 75 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 150
                    ? grillpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 150 ? "grill" : "???"
                }
                storeItemPrice={150 + grillCount * grillCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={grillCount}
                itemSetter={setGrillCount}
                bpsIncrease={grillBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 150 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 225
                    ? truckpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 225 ? "truck" : "???"
                }
                storeItemPrice={225 + truckCount * truckCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={truckCount}
                itemSetter={setTruckCount}
                bpsIncrease={truckBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 225 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 450
                    ? bankpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 450 ? "bank" : "???"
                }
                storeItemPrice={450 + bankCount * bankCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={bankCount}
                itemSetter={setBankCount}
                bpsIncrease={bankBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 450 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 900
                    ? templepic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 900 ? "temple" : "???"
                }
                storeItemPrice={900 + templeCount * templeCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={templeCount}
                itemSetter={setTempleCount}
                bpsIncrease={templeBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 900 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 4500
                    ? labpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 4500 ? "lab" : "???"
                }
                storeItemPrice={4500 + labCount * labCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={labCount}
                itemSetter={setLabCount}
                bpsIncrease={labBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 4500 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 45000
                    ? spacecraftpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 45000
                    ? "spacecraft"
                    : "???"
                }
                storeItemPrice={45000 + spacecraftCount * spacecraftCount}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={spacecraftCount}
                itemSetter={setSpacecraftCount}
                bpsIncrease={spacecraftBPS}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
