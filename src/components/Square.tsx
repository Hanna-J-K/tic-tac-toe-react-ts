import React from 'react';
type SquareProps = {
  handleMove: () => void;
  squareValue: string;
};

const Square = ({ handleMove, squareValue }: SquareProps) => {
  return (
    <button className="square" onClick={handleMove}>
      {squareValue}
    </button>
  );
}

export default Square;