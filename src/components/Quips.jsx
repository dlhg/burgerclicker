import React, { useState, useEffect } from "react";

const level0quips = ["Click the burger to start your journey"];
const level1quips = [
  "Five customers enjoyed our burgers today.",
  "The chef is experimenting with new toppings.",
  "Your mom gave a thumbs up.",
];
const level2quips = [
  "A line of customers formed during lunch hour!",
  "Word of mouth is bringing in new faces.",
  "Local influencers are raving about our burgers.",
];
const level3quips = [
  "The line of customers extends out the door!",
  "We served a record-breaking 50 customers today.",
  "Word of our burgers has reached neighboring towns.",
];
const level4quips = [
  "The expanded dining area is buzzing with activity!",
  "Today, we served a whopping 100 customers and counting.",
  "People travel from neighboring cities to taste our burgers.",
];
const level5quips = [
  "Lines are snaking out the door and around the block!",
  "Today, we served an astounding 200 customers and counting.",
  "People from across the country pilgrimage to taste our legendary burgers.",
];
const level6quips = [
  "Our burgers have achieved legendary status around the world!",
  "Every day, we serve an astonishing 500 customers and more.",
  "People travel from every corner of the globe for a taste of our iconic burgers.",
];
const level7quips = [
  "Our burger automation has streamlined global logistics, making deliveries faster than the speed of light!",
  "The peaceful burger revolution not only brought world peace but also declared burgers the universal symbol of unity.",
  "Every person on Earth now works for and eats at our restaurant — the global hub of culinary delight!",
];

export default function Quips(props) {
  const [currentQuip, setCurrentQuip] = useState(level0quips[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newQuip = getQuipBasedOnLevel(props.currentQuipLevel);
      setCurrentQuip(newQuip);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [props.currentQuipLevel]);

  function getQuipBasedOnLevel(level) {
    switch (level) {
      case 0:
        return level0quips[Math.floor(Math.random() * level0quips.length)];
      case 1:
        return level1quips[Math.floor(Math.random() * level1quips.length)];
      case 2:
        return level2quips[Math.floor(Math.random() * level2quips.length)];
      case 3:
        return level3quips[Math.floor(Math.random() * level3quips.length)];
      case 4:
        return level4quips[Math.floor(Math.random() * level4quips.length)];
      case 5:
        return level5quips[Math.floor(Math.random() * level5quips.length)];
      case 6:
        return level6quips[Math.floor(Math.random() * level6quips.length)];
      case 7:
        return level7quips[Math.floor(Math.random() * level7quips.length)];
      default:
        return ""; // Handle unknown levels gracefully
    }
  }

  return (
    <>
      <div>{currentQuip}</div>
      <br />
      {/* Additional JSX if needed */}
    </>
  );
}
