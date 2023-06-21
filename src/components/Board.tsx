import React, { useState } from "react";
import Square from "./Square";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Board = () => {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [displayPlayer, setDisplayPlayer] = useState<string>("X");

  const calculateWinningPattern = (squares: string[]): boolean => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const handleMove = (i: number): void => {
    if (squares[i] !== "") {
        return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setSquares(squares);
    setDisplayPlayer(xIsNext ? "O" : "X");
    setXIsNext(!xIsNext);

    if (calculateWinningPattern(squares)) {
      alert(`${squares[i]} is the winner!`);
      setSquares(Array(9).fill(""));
    }

    if (squares.every((square) => square !== "") && !calculateWinningPattern(squares)) {
        alert("It's a tie!");
        setSquares(Array(9).fill(""));
    }

  };

  const fillSquare = (i: number) => {
    return <Square handleMove={() => handleMove(i)} squareValue={squares[i]} />;
  };
  return (
    <div className="board">
      <div className="player">
        <h2>Next turn: {displayPlayer}</h2>
      </div>
      <div className="board-row">
        {fillSquare(0)}
        {fillSquare(1)}
        {fillSquare(2)}
      </div>
      <div className="board-row">
        {fillSquare(3)}
        {fillSquare(4)}
        {fillSquare(5)}
      </div>
      <div className="board-row">
        {fillSquare(6)}
        {fillSquare(7)}
        {fillSquare(8)}
      </div>
    </div>
  );
};

export default Board;
