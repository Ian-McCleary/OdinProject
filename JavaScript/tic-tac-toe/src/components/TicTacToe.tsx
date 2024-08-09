import { useState } from "react";
import GridButton from "./GridButton";
import styles from "../styles/tictactoe.module.css"

/** TicTacToe game */
export default function TicTacToe() {
    const [gameBoard, setGameBoard] = useState<number[]>(new Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [playerHasWon, setPlayerHasWon] = useState(false)
    

    const game = (function() {
        /** attempts for player to take turn at grid cell. switches the current player*/
        const takeTurn = (position: number) => {
            console.log("player " + currentPlayer + " has moved to " + position)
            if (0 <= position && position < gameBoard.length && gameBoard[position] == 0) {
                let newBoard = gameBoard
                newBoard[position] = currentPlayer
                setGameBoard(newBoard)
                let won = hasWon()
                setPlayerHasWon(won)
                if (won) {
                    return
                }
                changeCurrentPLayer()
            }
        }
        /** changes the current player between 1 and 2 */
        const changeCurrentPLayer = () => {
            if (currentPlayer == 1){
                setCurrentPlayer(2)
            } else {
                setCurrentPlayer(1)
            }
        }

        /** Returns true if the current player has won. This ends the game */
        const hasWon = () => {
            const winningCombos = [
                // horizontal wins
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                // vertical wins
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                // diagonal wins
                [0, 4, 8],
                [6, 4, 2]
            ];
            for (let i = 0; i < winningCombos.length; i++) {
                let win = winningCombos[i];
                if (gameBoard[win[0]] == currentPlayer && gameBoard[win[1]] == currentPlayer && gameBoard[win[2]] == currentPlayer) {
                    return true
                }
            } 
            return false
        }
        
        /** reset the game, the current player and the win variable */
        const resetGame = () => {
            setGameBoard(new Array(9).fill(0))
            setCurrentPlayer(1)
            setPlayerHasWon(false)
        }
        return {takeTurn, hasWon, resetGame}
    })();

    /**msg to display when a player has won */
    const hasWonMsg = () => {
        if (playerHasWon){
            return (
                <div className={styles.hasWonMsg}>Player {currentPlayer} has won!</div>
            )
        }
        return (<div></div>)
        
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.currentPlayer}>Player {currentPlayer}'s Turn</div>
                <button className={styles.resetButton} onClick={game.resetGame}>Reset</button>
            </div>
            <div className={styles.gridContainer}>
                {gameBoard.map((val, idx) => <GridButton key={idx} id={idx} onClick={game.takeTurn} disabled={gameBoard[idx] !== 0 || playerHasWon} whoClicked={gameBoard[idx]}></GridButton>)}
            </div>
            {hasWonMsg()}
        </div>
    )

}