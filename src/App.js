import React, { useState } from 'react';
import { MapInteractionCSS } from 'react-map-interaction';
import Piece from './Piece';

const boardPieces = [
  {
    x: 200,
    y: 200,
    letter: "A",
  },
  {
    x: 400,
    y: 400,
    letter: "B",
  },
];

function App() {
  const {mapState, setMapState } = useState({
    scale: 0.25,
    translation: { x: 0, y: 0 }
  });

  const renderBoardPieces = () => {
    return boardPieces.map((boardPiece, index) => {
      return (
        <Piece
          key={`board-piece-${index}`} 
          x={boardPiece.x} 
          y={boardPiece.y} 
          letter={boardPiece.letter} />
      );
    })
  };

  return (
    <div style={{ width: "100vw" , height: "100vh" }} >
      <MapInteractionCSS
      value = {mapState}
      onChange={(value) => setMapState(value)}
      >
        {renderBoardPieces()}
      </MapInteractionCSS>
    </div>
    
  );
}

export default App;
