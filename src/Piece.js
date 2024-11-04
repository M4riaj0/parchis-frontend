import React from 'react';

function Piece({ x , y , letter}) {
    console.log("Pieceee");
  return (
    <div style={{
        position: "absolute",
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "black",
        left: x,
        top: y,
    }}
    >
      <p style={{ fontSize: 30, fontWeight: 'bold' }} >{letter}</p>
    </div>
  );
}

export default Piece;
