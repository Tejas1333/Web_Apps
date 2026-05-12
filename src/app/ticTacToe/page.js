"use client";
import React from "react";
import { useState, useEffect } from "react";
import { RxCross1, RxCircle } from "react-icons/rx";

export default function TicTacToe() {
  const [turn, setTurn] = useState(0);
  const [box, setBox] = useState(null);
  const [won, setWon] = useState(false);
  const [whoWon, setWhoWon] = useState(null);
  const [vis, setVis] = useState(
    Array(3)
      .fill(0)
      .map(() => Array(3).fill(0)),
  );
  const [symbols, setSymbols] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
  );

  useEffect(() => {
    handleWin();
  }, [symbols]);

  function handleTurn() {
    setTurn((prev) => {
      return prev + 1;
    });
  }

  function handleVis(i) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const newVis = [...vis];
    newVis[row][col] = 1;
    setVis(newVis);
  }
  function handleSymbol(i) {
    const row = Math.floor(i / 3);
    const col = i % 3;

    const newSymbols = [...symbols];
    turn % 2 === 0
      ? (newSymbols[row][col] = "O")
      : (newSymbols[row][col] = "X");
    setSymbols(newSymbols);
  }
  function handleWin() {
    // rows
    if (
      symbols[0][0] !== null &&
      symbols[0][0] === symbols[0][1] &&
      symbols[0][1] === symbols[0][2]
    ) {
      setWon(true);
      setWhoWon(symbols[0][0]);
    }

    if (
      symbols[1][0] !== null &&
      symbols[1][0] === symbols[1][1] &&
      symbols[1][1] === symbols[1][2]
    ) {
      setWon(true);
      setWhoWon(symbols[1][0]);
    }

    if (
      symbols[2][0] !== null &&
      symbols[2][0] === symbols[2][1] &&
      symbols[2][1] === symbols[2][2]
    ) {
      setWon(true);
      setWhoWon(symbols[2][0]);
    }

    // columns
    if (
      symbols[0][0] !== null &&
      symbols[0][0] === symbols[1][0] &&
      symbols[1][0] === symbols[2][0]
    ) {
      setWon(true);
      setWhoWon(symbols[0][0]);
    }

    if (
      symbols[0][1] !== null &&
      symbols[0][1] === symbols[1][1] &&
      symbols[1][1] === symbols[2][1]
    ) {
      setWon(true);
      setWhoWon(symbols[0][1]);
    }

    if (
      symbols[0][2] !== null &&
      symbols[0][2] === symbols[1][2] &&
      symbols[1][2] === symbols[2][2]
    ) {
      setWon(true);
      setWhoWon(symbols[0][2]);
    }

    // diagonals
    if (
      symbols[0][0] !== null &&
      symbols[0][0] === symbols[1][1] &&
      symbols[1][1] === symbols[2][2]
    ) {
      setWon(true);
      setWhoWon(symbols[0][0]);
    }

    if (
      symbols[0][2] !== null &&
      symbols[0][2] === symbols[1][1] &&
      symbols[1][1] === symbols[2][0]
    ) {
      setWon(true);
      setWhoWon(symbols[0][2]);
    }
  }
 return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-purple-100 flex flex-col justify-center items-center overflow-hidden relative text-gray-800">

      {/* Background Blurs */}
      <div className="absolute w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-10 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
        Tic Tac Toe
      </h1>

      {/* Board */}
      <div className="grid grid-cols-3 gap-4 p-8 rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.2)]">

        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="
              w-28 h-28
              rounded-2xl
              bg-white/40
              border border-white/50
              backdrop-blur-xl
              flex justify-center items-center
              cursor-pointer
              transition-all duration-300
              hover:scale-105
              hover:bg-white/60
              active:scale-95
              shadow-lg
            "
            onClick={() => {
              if (won) return;

              const row = Math.floor(i / 3);
              const col = i % 3;

              if (vis[row][col] === 1) return;

              handleTurn();
              setBox(i);
              handleVis(i);
              handleSymbol(i);
            }}
          >
            {vis[Math.floor(i / 3)][i % 3] === 1 &&
              symbols[Math.floor(i / 3)][i % 3] === "O" && (
                <RxCircle className="text-cyan-500 text-6xl drop-shadow-lg" />
              )}

            {vis[Math.floor(i / 3)][i % 3] === 1 &&
              symbols[Math.floor(i / 3)][i % 3] === "X" && (
                <RxCross1 className="text-pink-500 text-6xl drop-shadow-lg" />
              )}
          </div>
        ))}
      </div>

      {/* Turn Indicator */}
      {!won && turn < 9 && (
        <div className="mt-8 px-6 py-3 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg text-2xl font-semibold">
          Current Turn:
          <span
            className={`ml-2 ${
              turn % 2 === 0 ? "text-cyan-600" : "text-pink-600"
            }`}
          >
            {turn % 2 === 0 ? "O" : "X"}
          </span>
        </div>
      )}

      {/* Winner */}
      {won && (
        <div className="mt-8 flex flex-col items-center gap-5">

          <div className="text-5xl font-extrabold animate-pulse">
            <span
              className={`${
                whoWon === "O" ? "text-cyan-600" : "text-pink-600"
              }`}
            >
              {whoWon}
            </span>{" "}
            Won 🎉
          </div>

          <button
            className="
              px-8 py-3
              rounded-2xl
              bg-white/40
              backdrop-blur-xl
              border border-white/50
              shadow-lg
              hover:scale-105
              transition-all duration-300
              font-bold
              text-lg
            "
            onClick={() => {
              setTurn(0);
              setBox(null);
              setWon(false);
              setWhoWon(null);

              setVis(
                Array(3)
                  .fill(0)
                  .map(() => Array(3).fill(0))
              );

              setSymbols(
                Array(3)
                  .fill(null)
                  .map(() => Array(3).fill(null))
              );
            }}
          >
            Play Again
          </button>
        </div>
      )}

      {/* Draw */}
      {turn === 9 && !won && (
        <div className="mt-8 flex flex-col items-center gap-5">

          <div className="text-4xl font-bold text-yellow-600 animate-pulse">
            Match Draw 🤝
          </div>

          <button
            className="
              px-8 py-3
              rounded-2xl
              bg-white/40
              backdrop-blur-xl
              border border-white/50
              shadow-lg
              hover:scale-105
              transition-all duration-300
              font-bold
              text-lg
            "
            onClick={() => {
              setTurn(0);
              setBox(null);
              setWon(false);
              setWhoWon(null);

              setVis(
                Array(3)
                  .fill(0)
                  .map(() => Array(3).fill(0))
              );

              setSymbols(
                Array(3)
                  .fill(null)
                  .map(() => Array(3).fill(null))
              );
            }}
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  </>
);
}
