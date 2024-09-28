export default function Gameover({winner,handleReset}){
    return(
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p>game drawn</p>}
            <p><button onClick={handleReset}>Rematch</button></p>
        </div>
    )
}