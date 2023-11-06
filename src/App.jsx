/*
should update burgers per second logic

instead of having a new building purchase add a specific amount to overall BPS, BPS should be calulated as follows:
  - (pointerCount * pointerBPS) + (workerCount * workerBPS) + (continue pattern) = BPS
  - track burgers created by individual building types
  - you should be able to setWorkerCount to a higher or lower number and have BPS update automatically
*/

//style imports
import "./App.css";

//hook imports
import { useState, useEffect } from "react";
//import useSound from "use-sound";

//image import
import burgerpic from "./assets/images/transparentburger.png";

import transparentburger_smallpic from "./assets/images/transparentburger_small.png";

//store item images - buildings
import workerpic from "./assets/images/worker_small_transparent.png";
import pointerpic from "./assets/images/pointer.png";
import grillpic from "./assets/images/grill_small_transparent.png";
import questionmarkpic from "./assets/images/questionmark_small_transparent.png";
import bankpic from "./assets/images/bank_small_transparent.png";
import templepic from "./assets/images/temple_small_transparent.png";
import truckpic from "./assets/images/truck_small_transparent.png";
import labpic from "./assets/images/lab_small_transparent.png";
import spacecraftpic from "./assets/images/spacecraft_small_transparent.png";
import portalpic from "./assets/images/portal_small_transparent.png";
//store item images - upgrades
import cat from "./assets/images/cat_small_transparent.png";

//sfx imports
//import borgir from "./assets/sfx/borgir.mp3";

//music imports

//component imports
import Burger from "./components/Burger";
import TestConsoleButton from "./components/TestConsoleButton";
import TestConsole from "./components/TestConsole";
import StoreItem from "./components/StoreItem";
import APIfetcher from "./components/APIfetcher";
import Buildings from "./components/Buildings";
import Options from "./components/Options";
import Stats from "./components/Stats";
import Info from "./components/Info";
import Legacy from "./components/Legacy";
import UpgradeItem from "./components/UpgradeItem";
import FallingImages from "./components/FallingImages";
import Quips from "./components/Quips";
import UpgradeStore from "./components/UpgradeStore";
import ToopTip from "./components/ToolTip";
import MinigameTemplate from "./components/MinigameTemplate";
import Minigame_BurgerAssembly from "./components/Minigame_BurgerAssembly";

//helper function imports

import { scaleItemPrice } from "./utils/index";
import { formatNumber } from "./utils/index";

function App() {
  //state

  //state for things related to player progress (quips etc)
  const [currentQuipLevel, setCurrentQuipLevel] = useState(0);
  //state for main area (game, options, stats, info, legacy)
  const [mainArea, setMainArea] = useState("buildings");
  //isBoostActive used to control what class is assigned to div1, which determines is bg anim is present
  const [isBoostActive, setIsBoostActive] = useState(false);

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

  // burgers per sec and burgers per click temp boost
  const [tempBPSBoostMultiplier, setTempBPSBoostMultiplier] = useState(1);
  const [tempBPCBoostMultiplier, setTempBPCBoostMultiplier] = useState(1);

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
  const [portalCount, setPortalCount] = useState(0);
  const [portalBPS, setPortalBPS] = useState(50000);

  //upgrades
  const [purchasedUpgradeIDs, setPurchasedUpgradeIDs] = useState([]);

  //useEffect

  // sets Quip Level based on totalBurgersProducedUnformatted
  useEffect(() => {
    if (totalBurgersProducedUnformatted === 1) {
      setCurrentQuipLevel(1);
      console.log(`changing currentQuipLevel to 1`);
    } else if (
      totalBurgersProducedUnformatted >= 1000 &&
      totalBurgersProducedUnformatted <= 10000 &&
      currentQuipLevel !== 2
    ) {
      setCurrentQuipLevel(2);
      console.log(`changing currentQuipLevel to 2`);
    } else if (
      totalBurgersProducedUnformatted >= 10000 &&
      totalBurgersProducedUnformatted <= 100000 &&
      currentQuipLevel !== 3
    ) {
      setCurrentQuipLevel(3);
      console.log(`changing currentQuipLevel to 3`);
    } else if (
      totalBurgersProducedUnformatted >= 100000 &&
      totalBurgersProducedUnformatted <= 1000000 &&
      currentQuipLevel !== 4
    ) {
      setCurrentQuipLevel(4);
      console.log(`changing currentQuipLevel to 4`);
    } else if (
      totalBurgersProducedUnformatted >= 1000000 &&
      totalBurgersProducedUnformatted <= 10000000 &&
      currentQuipLevel !== 5
    ) {
      setCurrentQuipLevel(5);
      console.log(`changing currentQuipLevel to 5`);
    } else if (
      totalBurgersProducedUnformatted >= 10000000 &&
      totalBurgersProducedUnformatted <= 100000000 &&
      currentQuipLevel !== 6
    ) {
      setCurrentQuipLevel(6);
      console.log(`changing currentQuipLevel to 6`);
    } else if (
      totalBurgersProducedUnformatted >= 100000000 &&
      currentQuipLevel !== 7
    ) {
      setCurrentQuipLevel(7);
      console.log(`changing currentQuipLevel to 7`);
    }
  }, [totalBurgersProducedUnformatted]);

  // update burgerCount every 100ms with BPS/10
  useEffect(() => {
    const interval = setInterval(() => {
      setBurgerCount(
        (prevBurgerCount) =>
          prevBurgerCount + (burgersPerSecond * tempBPSBoostMultiplier) / 10
      );
    }, 100);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [burgersPerSecond, tempBPSBoostMultiplier]);

  // rounds the burgerCount down to nearest integer to display to the player (avoids player seeing things like 50.33 burgers)
  useEffect(() => {
    setDisplayedBurgerCount(Math.floor(burgerCount));
  }, [burgerCount]);

  // updates Total Burgers Produced by summing clicked burgers count + automated burgers count
  useEffect(() => {
    setTotalBurgersProduced(
      formatNumber(burgersMadeFromClicking + burgersMadeFromAutomation)
    );
    setTotalBurgersProducedUnformatted(
      burgersMadeFromClicking + burgersMadeFromAutomation
    );
  }, [burgersMadeFromClicking, burgersMadeFromAutomation]);

  //const [playBorgirSound] = useSound(borgir);

  return (
    <>
      <div className="parent">
        <div
          className={isBoostActive ? "div1--boost--active" : "div1"}
          id="burger"
        >
          <div className="big--burger--container">
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
              tempBPSBoostMultiplier={tempBPSBoostMultiplier}
              setTempBPSBoostMultiplier={setTempBPSBoostMultiplier}
              setTempBPSBoostMultiplier={setTempBPSBoostMultiplier}
              tempBPCBoostMultiplier={tempBPCBoostMultiplier}
              burgerpic={burgerpic}
            />
          </div>
          <div></div>
          <FallingImages
            currentQuipLevel={currentQuipLevel}
            img={transparentburger_smallpic}
          />
        </div>
        {
          <div className="div2">
            <div className="navbar">
              <div className="navbar--left">
                <button onClick={() => setMainArea("options")}>options</button>
                <button onClick={() => setMainArea("stats")}>stats</button>
                <button onClick={() => setMainArea("info")}>info</button>
              </div>
              <div className="navbar--center">
                <Quips
                  currentQuipLevel={currentQuipLevel}
                  isBoostActive={isBoostActive}
                />
              </div>
              <div className="navbar--right">
                <button onClick={() => setMainArea("legacy")}>legacy</button>

                <button onClick={() => setMainArea("buildings")}>game</button>
                <button onClick={() => setMainArea("testconsole")}>
                  console
                </button>
              </div>
            </div>
          </div>
        }
        <div
          className={
            mainArea === "minigame--burger--assembly"
              ? "div3--starting--from--top--row"
              : "div3"
          }
          id="gamearea"
        >
          {mainArea === "buildings" && (
            <>
              <UpgradeStore
                burgerCount={burgerCount}
                totalBurgersProducedUnformatted={
                  totalBurgersProducedUnformatted
                }
                setBurgersPerSecond={setBurgersPerSecond}
                setBurgersPerClick={setBurgersPerClick}
                setBurgerCount={setBurgerCount}
                setTempBPCBoostMultiplier={setTempBPCBoostMultiplier}
                setTempBPSBoostMultiplier={setTempBPSBoostMultiplier}
                tempBPCBoostMultiplier={tempBPCBoostMultiplier}
                tempBPSBoostMultiplier={tempBPSBoostMultiplier}
                isBoostActive={isBoostActive}
                setIsBoostActive={setIsBoostActive}
                purchasedUpgradeIDs={purchasedUpgradeIDs}
                setPurchasedUpgradeIDs={setPurchasedUpgradeIDs}
                setPointerBPS={setPointerBPS}
                setWorkerBPS={setWorkerBPS}
                setGrillBPS={setGrillBPS}
                setTruckBPS={setTruckBPS}
                setBankBPS={setBankBPS}
                setTempleBPS={setTempleBPS}
                setLabBPS={setLabBPS}
                setSpaceCraftBPS={setSpaceCraftBPS}
                setPortalBPS={setPortalBPS}
                pointerCount={pointerCount}
                workerCount={workerCount}
                grillCount={grillCount}
                truckCount={truckCount}
                bankCount={bankCount}
                templeCount={templeCount}
                labCount={labCount}
                spacecraftCount={spacecraftCount}
                portalCount={portalCount}
              />
              <Buildings
                setMainArea={setMainArea}
                pointerpic={pointerpic}
                workerpic={workerpic}
                grillpic={grillpic}
                bankpic={bankpic}
                truckpic={truckpic}
                templepic={templepic}
                labpic={labpic}
                spacecraftpic={spacecraftpic}
                portalpic={portalpic}
                pointerCount={pointerCount}
                workerCount={workerCount}
                grillCount={grillCount}
                bankCount={bankCount}
                truckCount={truckCount}
                templeCount={templeCount}
                labCount={labCount}
                spacecraftCount={spacecraftCount}
                portalCount={portalCount}
              />
            </>
          )}
          {mainArea === "minigame" && (
            <MinigameTemplate
              totalBurgersProducedUnformatted={totalBurgersProducedUnformatted}
              showMinigameCondition={totalBurgersProducedUnformatted >= 3}
              setMainArea={setMainArea}
              setBurgerCount={setBurgerCount}
            />
          )}
          {mainArea === "minigame--burger--assembly" && (
            <Minigame_BurgerAssembly
              totalBurgersProducedUnformatted={totalBurgersProducedUnformatted}
              showMinigameCondition={totalBurgersProducedUnformatted >= 3}
              setMainArea={setMainArea}
              setBurgerCount={setBurgerCount}
            />
          )}
          {mainArea === "options" && <Options />}
          {mainArea === "stats" && (
            <Stats
              totalBurgersProduced={totalBurgersProduced}
              burgersMadeFromClicking={burgersMadeFromClicking}
              burgersMadeFromAutomation={burgersMadeFromAutomation}
              burgersPerClick={burgersPerClick}
            />
          )}
          {mainArea === "info" && <Info />}
          {mainArea === "legacy" && <Legacy />}
          {mainArea === "testconsole" && (
            <TestConsole
              setBurgersPerSecond={setBurgersPerSecond}
              setBurgersPerClick={setBurgersPerClick}
              setTempBPSBoostMultiplier={setTempBPSBoostMultiplier}
              setTempBPCBoostMultiplier={setTempBPCBoostMultiplier}
              setCurrentQuipLevel={setCurrentQuipLevel}
              setBurgerCount={setBurgerCount}
              setTotalBurgersProducedUnformatted={
                setTotalBurgersProducedUnformatted
              }
              setBurgersMadeFromClicking={setBurgersMadeFromClicking}
              setBurgersMadeFromAutomation={setBurgersMadeFromAutomation}
              setPointerCount={setPointerCount}
              setPointerBPS={setPointerBPS}
              setWorkerCount={setWorkerCount}
              setWorkerBPS={setWorkerBPS}
              setGrillCount={setGrillCount}
              setGrillBPS={setGrillBPS}
              setTruckCount={setTruckCount}
              setTruckBPS={setTruckBPS}
              setBankCount={setBankCount}
              setBankBPS={setBankBPS}
              setTempleCount={setTempleCount}
              setTempleBPS={setTempleBPS}
              setLabCount={setLabCount}
              setLabBPS={setLabBPS}
              setSpacecraftCount={setSpacecraftCount}
              setSpaceCraftBPS={setSpaceCraftBPS}
              setPortalCount={setPortalCount}
              setPortalBPS={setPortalBPS}
              isBoostActive={isBoostActive}
              setIsBoostActive={setIsBoostActive}
            />
          )}
        </div>
        <div className={isBoostActive ? "div4--boost--active" : "div4"}>
          <section className="section2" id="buildings">
            <StoreItem
              storeItemImage={
                totalBurgersProducedUnformatted >= 20
                  ? pointerpic
                  : questionmarkpic
              }
              storeItemName={
                totalBurgersProducedUnformatted >= 20 ? "pointer" : "???"
              }
              storeItemPrice={scaleItemPrice(10, pointerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={pointerCount}
              itemSetter={setPointerCount}
              bpsIncrease={pointerBPS}
            />
            <StoreItem
              storeItemImage={
                totalBurgersProducedUnformatted >= 100
                  ? workerpic
                  : questionmarkpic
              }
              storeItemName={
                totalBurgersProducedUnformatted >= 100 ? "worker" : "???"
              }
              storeItemPrice={scaleItemPrice(50, workerCount)}
              burgerCount={burgerCount}
              setBurgerCount={setBurgerCount}
              setBurgersPerSecond={setBurgersPerSecond}
              itemCount={workerCount}
              itemSetter={setWorkerCount}
              bpsIncrease={workerBPS}
            />
            {totalBurgersProducedUnformatted >= 100 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 300
                    ? grillpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 300 ? "grill" : "???"
                }
                storeItemPrice={scaleItemPrice(150, grillCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={grillCount}
                itemSetter={setGrillCount}
                bpsIncrease={grillBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 300 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 450
                    ? truckpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 450 ? "truck" : "???"
                }
                storeItemPrice={scaleItemPrice(225, truckCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={truckCount}
                itemSetter={setTruckCount}
                bpsIncrease={truckBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 450 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 900
                    ? bankpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 900 ? "bank" : "???"
                }
                storeItemPrice={scaleItemPrice(450, bankCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={bankCount}
                itemSetter={setBankCount}
                bpsIncrease={bankBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 900 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 1800
                    ? templepic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 1800 ? "temple" : "???"
                }
                storeItemPrice={scaleItemPrice(900, templeCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={templeCount}
                itemSetter={setTempleCount}
                bpsIncrease={templeBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 1800 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 9000
                    ? labpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 9000 ? "lab" : "???"
                }
                storeItemPrice={scaleItemPrice(4500, labCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={labCount}
                itemSetter={setLabCount}
                bpsIncrease={labBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 9000 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 90000
                    ? spacecraftpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 90000
                    ? "spacecraft"
                    : "???"
                }
                storeItemPrice={scaleItemPrice(45000, spacecraftCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={spacecraftCount}
                itemSetter={setSpacecraftCount}
                bpsIncrease={spacecraftBPS}
              />
            )}
            {totalBurgersProducedUnformatted >= 90000 && (
              <StoreItem
                storeItemImage={
                  totalBurgersProducedUnformatted >= 900000
                    ? portalpic
                    : questionmarkpic
                }
                storeItemName={
                  totalBurgersProducedUnformatted >= 900000 ? "portal" : "???"
                }
                storeItemPrice={scaleItemPrice(450000, portalCount)}
                burgerCount={burgerCount}
                setBurgerCount={setBurgerCount}
                setBurgersPerSecond={setBurgersPerSecond}
                itemCount={portalCount}
                itemSetter={setPortalCount}
                bpsIncrease={portalBPS}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
