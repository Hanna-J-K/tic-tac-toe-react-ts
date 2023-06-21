import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);
  const handleMove = (i: number) => {
    squares[i] = xIsNext ? "X" : "O";
    setSquares(squares);
    setXIsNext(!xIsNext);
  };

  const fillSquare = (i: number) => {
    return <Square handleMove={() => handleMove(i)} squareValue={squares[i]} />;
  };
  return (
    <div className="board">
      <div className="board-row">
      {fillSquare(0)}
      {fillSquare(1)}
      {fillSquare(2)}
        {/* {fillSquare(0)}
        {fillSquare(1)}
        {fillSquare(2)} */}
      </div>
      <div className="board-row">
        {fillSquare(3)}
        {fillSquare(4)}
        {fillSquare(5)}
        {/* {fillSquare(3)}
        {fillSquare(4)}
        {fillSquare(5)} */}
      </div>
      <div className="board-row">
        {fillSquare(6)}
        {fillSquare(7)}
        {fillSquare(8)}
        {/* {fillSquare(6)}
        {fillSquare(7)}
        {fillSquare(8)} */}
      </div>
    </div>
  );
}

export default Board;
