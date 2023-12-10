import React, { useState, useEffect, useRef } from "react";

const NPCBattle = () => {
  const [credits, setCredits] = useState(0);
  const [npcs, setNPCs] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [currentID, setCurrentID] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const gameLoopInterval = setInterval(gameLoop, 1000 / 60);
    return () => clearInterval(gameLoopInterval);
  }, [npcs]);

  const updateCredits = () => {
    setCredits((credits) => credits + 1);
  };

  function generateID() {
    setCurrentID((id) => id + 1);
    return currentID + 1;
  }

  const clearNPCs = () => {
    setNPCs([]);
  };

  const clearNPCsByColor = (color) => {
    setNPCs(npcs.filter((npc) => npc.color !== color));
  };

  const assignDamageStat = (color) => {
    if (color === "green") {
      return 100;
    }
    if (color === "red") {
      return 50;
    }
    if (color === "blue") {
      return 25;
    }
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
        id: generateID(),
        damage: assignDamageStat(color),
      };
      setNPCs((currentNPCs) => [...currentNPCs, newNPC]);
      setCredits((currentCredits) => currentCredits - cost);
      console.log(npcs);
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

  const spawnEnemy = () => {
    console.log("trying to spawn enemy");
    console.log(`enemies = ${JSON.stringify(enemies)}`);
    const newEnemy = {
      id: currentID * 10000,
      x: Math.random() * (canvasRef.current.width - 100), // Ensuring the enemy is within canvas bounds
      y: Math.random() * (canvasRef.current.height - 100),
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`,
      hp: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
    };

    // Check for overlap with existing enemies
    let isOverlapping = false;
    enemies.forEach((enemy) => {
      if (
        Math.abs(enemy.x - newEnemy.x) < 100 &&
        Math.abs(enemy.y - newEnemy.y) < 100
      ) {
        isOverlapping = true;
      }
    });

    if (!isOverlapping) {
      setEnemies([...enemies, newEnemy]);
      setCurrentID(currentID + 1);
    }
  };

  const clearEnemies = () => {
    setEnemies([]);
    console.log("clearEnemies called");
  };

  const drawEnemies = (ctx) => {
    enemies.forEach((enemy) => {
      ctx.fillStyle = enemy.color;
      ctx.fillRect(enemy.x, enemy.y, 100, 100);
      ctx.fillStyle = "black";
      ctx.fillText(`HP: ${enemy.hp}`, enemy.x + 50, enemy.y + 50);
    });
  };

  const gameLoop = () => {
    updateCredits();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); // Get the canvas context here
    drawNPCs();
    drawEnemies(ctx); // Pass the context to the drawEnemies function
  };
  return (
    <div>
      <p>Credits: {credits}</p>
      <button onClick={spawnEnemy}>Spawn Enemy</button>
      <button onClick={clearEnemies}>Clear Enemies</button>
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
      <button onClick={() => clearNPCsByColor("blue")}>Clear Blue NPCs</button>
      <button onClick={() => clearNPCsByColor("red")}>Clear Red NPCs</button>
      <button onClick={() => clearNPCsByColor("green")}>
        Clear Green NPCs
      </button>
      <button onClick={clearNPCs}>Clear All NPCs</button>

      <canvas ref={canvasRef} width={800} height={800}></canvas>
      <div id="npcCount">NPC Count: {npcs.length}</div>
      <div id="battleLog">{/* Battle Log goes here */}</div>
    </div>
  );
};

export default NPCBattle;
