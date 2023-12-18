import Cell from "./Cell"
const Board = () => {
  const cells =[];
  return (
    <div className="board">
      <div className="board-row">
        <Cell value={0}/>
        <Cell value={1}/>
        <Cell value={2}/>
      </div>
      <div className="board-row">
        <Cell value={4}/>
        <Cell value={5}/>
        <Cell value={6}/>
      </div>
      <div className="board-row">
        <Cell value={7}/>
        <Cell value={8}/>
        <Cell value={9}/>
      </div>
    </div>
  )
}

export default Board