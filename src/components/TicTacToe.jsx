import React, { useState } from 'react'
import Board from './Board';

const PLAYER_X = 'X';
const PLAYER_O = '0';

export default function TicTacToe() {
    const [tiles, setTiiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X)

    const handleTileClick = (index) => {

    }

  return (
    <div>
        <Board tiles={tiles} onTileClick={handleTileClick} />
    </div>
  )
}
