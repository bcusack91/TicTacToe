const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const xo = ["O", "X"];
  

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => {
    return palet[Math.floor(Math.random()*3)]
  }
  React.useEffect(()=> {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  })
  return (
    <button onClick={(e) => {
      setColor(getRandomColor());
      e.target.style.background = color;
    }}>
      <h1>{player}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>;
  }

  const toggle = () => {
    setMounted(!mounted);
  }

  const reRender = () => setRandom(Math.random())

  return (
    <div
      className="game-board"
      onClick={(e) => {
        const newPlayer = player === 0 ? 1 : 0;
        setPlayer(newPlayer);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>ReRender</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
