import "./GameOverDisplay.css";
const GameOverDisplay = ({gameOverText, restartGame}) => {
    return(
    <div className="game-over-wrapper">
        <div className="game-over-container">
            <p>{gameOverText}</p>
            <button onClick={restartGame}>RESTART</button>
        </div>
    </div>
    )
}
export default GameOverDisplay;