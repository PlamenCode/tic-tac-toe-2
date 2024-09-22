import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import TicTacToe from './components/TicTacToe';

function App() {
    return (
        <div className="app">
            <h1>Wellcome to Tic-Tac-Toe-2</h1>
                <TicTacToe />
        </div>
    );
}

export default App;
