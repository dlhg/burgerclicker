import React from "react";

export default function Info(props) {
  return (
    <>
      <div>
        Burger Clicker is a project developed by Drew Gragg using React JS,
        Vite, and ToneJS.
      </div>
      <br />
      <ul style={{ fontSize: "x-large" }}>
        <div style={{ fontWeight: "bold", textDecoration: "underline" }}>
          How to play
        </div>
        <li>Click the burger to start making burgers</li>
        <li>Buy items, buildings, and upgrades with burgers</li>
        <li>
          To unlock new store items, your total burgers produced must equal the
          initial cost of the item
        </li>
        <li>
          An item's price is red if you can't afford it and green if you can
        </li>
      </ul>
    </>
  );
}
