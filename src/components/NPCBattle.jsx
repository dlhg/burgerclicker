import React, { useState, useEffect, useRef } from "react";

const NPCBattle = () => {
  const [credits, setCredits] = useState(0);
  const [npcs, setNPCs] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [currentID, setCurrentID] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const loop = () => {
      gameLoop();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, [npcs, enemies]);

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
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5,
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
  const drawNPC = (npc, ctx, canvas) => {
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
  };

  const spawnEnemy = () => {
    const canvas = canvasRef.current;
    console.log("trying to spawn enemy");
    console.log(`enemies = ${JSON.stringify(enemies)}`);
    const newEnemy = {
      id: generateID(),
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

    if (isOverlapping) {
      spawnEnemy();
    }

    if (!isOverlapping) {
      console.log("new enemy not overlapping!");
      setEnemies([...enemies, newEnemy]);
      setCurrentID(currentID + 1);
    }
  };

  const clearEnemies = () => {
    setEnemies([]);
    console.log("clearEnemies called");
  };

  const drawEnemy = (enemy, ctx, canvas) => {
    const enemySize = 100; // Assuming enemy box is 100x100
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemySize, enemySize);

    // Set the font size and style for the HP text
    const fontSize = 20; // Example: setting font size to 20px
    ctx.font = `${fontSize}px Arial`; // Setting font family to Arial

    // Calculate the position to center the text
    const text = `${enemy.hp}`;
    const textWidth = ctx.measureText(text).width;
    const textX = enemy.x + (enemySize - textWidth) / 2; // Center horizontally
    const textY = enemy.y + enemySize / 2 + fontSize / 2; // Center vertically (approximation)

    ctx.fillStyle = "black";
    ctx.fillText(text, textX, textY);
  };

  const checkCollision = (npc, enemy) => {
    // Find the closest point to the circle within the rectangle
    const closestX = Math.max(enemy.x, Math.min(npc.x, enemy.x + 100)); // Assuming enemy width is 100
    const closestY = Math.max(enemy.y, Math.min(npc.y, enemy.y + 100)); // Assuming enemy height is 100

    // Calculate the distance between the circle's center and this closest point
    const distanceX = npc.x - closestX;
    const distanceY = npc.y - closestY;

    // If the distance is less than the circle's radius, collision detected
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance < 10; // Assuming NPC radius is 10
  };
  const gameLoop = () => {
    // Update credits and clear the canvas

    updateCredits();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Iterate through NPCs and enemies, drawing and checking for collisions
    npcs.forEach((npc, npcIndex) => {
      drawNPC(npc, ctx, canvas);
      enemies.forEach((enemy, enemyIndex) => {
        drawEnemy(enemy, ctx, canvas);
        if (checkCollision(npc, enemy)) {
          console.log(
            `Collision happened between NPC with ID ${npc.id} (damage: ${npc.damage}) and Enemy with ID ${enemy.id} (HP: ${enemy.hp})`
          );

          // Bounce the NPC off the enemy
          npc.dx = -npc.dx;
          npc.dy = -npc.dy;

          // Reduce enemy HP by the damage of the NPC
          const newHp = enemy.hp - npc.damage;
          if (newHp > 0) {
            // Update enemy HP if it's still above 0
            setEnemies((prevEnemies) => {
              const newEnemies = [...prevEnemies];
              newEnemies[enemyIndex] = { ...enemy, hp: newHp };
              return newEnemies;
            });
          } else {
            // Remove enemy if HP is 0 or below
            setEnemies((prevEnemies) =>
              prevEnemies.filter((e, i) => i !== enemyIndex)
            );
          }
        }
      });

      // Update the direction and position of the NPC
      setNPCs((prevNPCs) => {
        const newNPCs = [...prevNPCs];
        newNPCs[npcIndex] = { ...npc };
        return newNPCs;
      });
    });

    // Request animation frame for the next frame of the game loop
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
