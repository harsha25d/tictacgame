


export default function Gameboard({onSelectPlayer,board}){
    
    /*let [gameboard,setGameboard]=useState(initialGameboard);
    function handleButton(rowIndex,colIndex){
        setGameboard((previousGameboard) =>{
            let updatedGameboard = [...previousGameboard.map((innerarray) =>[...innerarray] )]
            updatedGameboard[rowIndex][colIndex] = presentactivePlayer;
            return updatedGameboard;

    })
        onSelectPlayer();
    }*/
    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=><li>
                <ol>
                    {row.map((playerSymbol,colIndex)=>
                    <li>
                        <button onClick={()=>onSelectPlayer(rowIndex,colIndex)} disabled={ playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
           
        </ol>

    )
}