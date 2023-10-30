import { useState, useEffect } from 'react';
import './App.css';
import SmallSquare from "../../components/SmallSquare/SmallSquare";
import Tries from "../../components/Tries/Tries";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";
import Score from "../../components/Score/Score";

const App = () => {
  const [smallSquare, setSmallSquare] = useState<{ id: number; squareClass: string; prize: string; hideClass: string; }[]>([]);
  const [tries, setTries] = useState(0);
  const [hiddenId, setHiddenId] = useState(0);
  const [active, setActive] = useState(true);
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');
  const [score, setScore] = useState(36);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (smallSquare.length === 0) {
      createSquares();
    }
  }, [smallSquare]);

  const createSquares = () => {
    let squares = [];
    for (let i = 0; i < 36; i++) {
      squares.push({ id: i, squareClass: 'small_div', prize: '', hideClass: '' });
    }
    const rand = Math.round(Math.random() * 36);
    squares[rand].hideClass = 'hide';
    setSmallSquare(squares);
    setHiddenId(rand);
  }

  const gameReset = () => {
    setSmallSquare([]);
    setTries(0);
    setActive(true);
    setNote1('');
    setNote2('');
    setTotalScore(prevTotal => prevTotal + score);
    setScore(36);
  }

  const changeClass = (event) => {
    const id = parseInt(event.currentTarget.id, 10);
    let squaresCopy = [...smallSquare];
    squaresCopy[id].squareClass = 'toggle_div';
    squaresCopy[id].hideClass = 'show';
    setTries(prevTries => prevTries + 1);
    setScore(prevScore => prevScore - 1);

    if (id === hiddenId) {
      setActive(false);
      setNote1('You Winn!!!');
      setNote2('Press RESET to continue');
      squaresCopy[hiddenId].prize = 'O';
      setSmallSquare(squaresCopy);
    }
  }

  return (
      <div className="App">
        <Notification note1={note1} note2={note2} />
        <div className="square_div">
          {smallSquare.map((item, key) => {
            return <SmallSquare key={key}
                                id={item.id}
                                divClass={item.squareClass}
                                changeColor={(event) => {
                                  if (active) {
                                    changeClass(event);
                                  }
                                }}
                                prize={item.prize}
                                hide={item.hideClass} />
          })}
        </div>
        <Tries tries={tries} />
        <Button onClick={gameReset} />
        <Score score={score} totalScore={totalScore} />
      </div>
  );
}

export default App;