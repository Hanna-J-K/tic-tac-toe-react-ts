import React from 'react';
import './Square.css';
type SquareProps = {
  handleMove: () => void;
  squareValue: string | null;
};

const Square = ({ handleMove, squareValue }: SquareProps) => {
  return (
    <button className="square" onClick={handleMove}>
      {squareValue}
    </button>
  );
}

export default Square;