import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

export default function Timer() {
  const { gameTime, setGameTime, gameRunning } = useContext(AppContext);

  useEffect(() => {
    let intervalId;
    if (gameRunning) {
      intervalId = setInterval(() => setGameTime(gameTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [gameTime, gameRunning]);

  const minutes = Math.floor((gameTime % 360000) / 6000);
  const seconds = Math.floor((gameTime % 6000) / 100);
  const milliseconds = gameTime % 100;

  return (
    <div className="game-time flex relative justify-center mr-auto ml-auto bottom-14 text-white text-3xl">
      <div>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}
