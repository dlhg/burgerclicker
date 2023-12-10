import React, { useState, useEffect, useRef } from "react";

const NPCBattle = () => {
  const [credits, setCredits] = useState(0);
  const [npcs, setNPCs] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const gameLoopInterval = setInterval(gameLoop, 1000 / 60);
    return () => clearInterval(gameLoopInterval);
  }, [npcs]);

  const updateCredits = () => {
    setCredits((credits) => credits + 1);
  };

  const clearNPCs = () => {
    setNPCs([]);
  };

  const buyNPC = (type, cost, color) => {
    const canvas = canvasRef.current;
    if (credits >= cost) {
      const newNPC = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: color,
      };
      setNPCs((currentNPCs) => [...currentNPCs, newNPC]);
      setCredits((currentCredits) => currentCredits - cost);
    } else {
      alert("Not enough credits!");
    }
  };

  const drawNPCs = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    npcs.forEach((npc) => {
      npc.x += npc.dx;
      npc.y += npc.dy;

      // Collision detection and response
      if (npc.x < 0 || npc.x > canvas.width) npc.dx = -npc.dx;
      if (npc.y < 0 || npc.y > canvas.height) npc.dy = -npc.dy;

      ctx.beginPath();
      ctx.arc(npc.x, npc.y, 10, 0, 2 * Math.PI);
      ctx.fillStyle = npc.color;
      ctx.fill();
      ctx.stroke();
    });
  };

  const gameLoop = () => {
    updateCredits();
    drawNPCs();
  };

  return (
    <div>
      <p>Credits: {credits}</p>
      <button onClick={() => buyNPC("Blue", 1000, "blue")}>
        Buy Blue NPC (1000)
      </button>
      <button onClick={() => buyNPC("Red", 10000, "red")}>
        Buy Red NPC (10,000)
      </button>
      <button onClick={() => buyNPC("Green", 100000, "green")}>
        Buy Green NPC (100,000)
      </button>
      <button onClick={() => buyNPC("Blue", 0, "blue")}>
        test - free blue NPC
      </button>
      <button onClick={() => buyNPC("Red", 0, "red")}>
        test - free red NPC
      </button>
      <button onClick={() => buyNPC("Green", 0, "green")}>
        test - free green NPC
      </button>
      <button onClick={clearNPCs}>Clear All NPCs</button>

      <canvas ref={canvasRef} width={800} height={800}></canvas>
      <div id="npcCount">NPC Count: {npcs.length}</div>
      <div id="battleLog">{/* Battle Log goes here */}</div>
    </div>
  );
};

export default NPCBattle;
