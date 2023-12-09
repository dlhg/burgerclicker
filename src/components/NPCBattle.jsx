import React, { Component } from "react";

class NPCBattle extends Component {
  constructor() {
    super();
    this.state = {
      credits: 0,
      npcs: [],
    };
    this.canvas = null;
    this.ctx = null;
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.gameLoopInterval = setInterval(this.gameLoop, 1000 / 60);
  }

  updateCredits = () => {
    this.setState((prevState) => ({ credits: prevState.credits + 1 }));
  };

  buyNPC = (type, cost, color) => {
    const { credits, npcs } = this.state;

    if (credits >= cost) {
      this.setState((prevState) => ({
        credits: prevState.credits - cost,
        npcs: [
          ...prevState.npcs,
          {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            color: color,
          },
        ],
      }));
    } else {
      alert("Not enough credits!");
    }
  };

  drawNPCs = () => {
    const { npcs } = this.state;
    const { ctx, canvas } = this;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    npcs.forEach((npc) => {
      npc.x += npc.dx;
      npc.y += npc.dy;

      if (npc.x < 0 || npc.x > canvas.width) npc.dx = -npc.dx;
      if (npc.y < 0 || npc.y > canvas.height) npc.dy = -npc.dy;

      ctx.beginPath();
      ctx.arc(npc.x, npc.y, 10, 0, 2 * Math.PI);
      ctx.fillStyle = npc.color;
      ctx.fill();
      ctx.stroke();
    });
  };

  gameLoop = () => {
    this.updateCredits();
    this.drawNPCs();
  };

  render() {
    const { credits, npcs } = this.state;

    return (
      <div>
        <p>Credits: {credits}</p>
        <button onClick={() => this.buyNPC("Blue", 100, "blue")}>
          Buy Blue NPC
        </button>
        <button onClick={() => this.buyNPC("Red", 1000, "red")}>
          Buy Red NPC
        </button>
        <button onClick={() => this.buyNPC("Green", 10000, "green")}>
          Buy Green NPC
        </button>
        <canvas ref="canvas" width={400} height={400}></canvas>
        <div id="npcCount">NPC Count: {npcs.length}</div>
        <div id="battleLog">{/* Battle Log goes here */}</div>
      </div>
    );
  }
}

export default NPCBattle;
