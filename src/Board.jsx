import React, { useState } from "react";
import "./styles.css";
export default function Board() {
  /**
   * @prevBoard is used to store the array of size 9 and
   * fill them with null values
   * @setBoard is used to change the state of the Board
   * whenever any change happens to the DOM element
   */

  const [prevBoard, setBoard] = useState(Array(9).fill(null));
  /**
   * @count is used to find whether the game has drawn or not
   * @setCount is used to change the count value whenever
   * user interacts with the cell
   */

  const [count, setCount] = useState(0);

  /**
   * @turn is used to select the player's
   * turn whether it is "X" or "O" who need to make
   * a move
   * @setNext is used to update the state of the
   * turn variable to make the other guy
   * to make his move
   */

  const [turn, setNext] = useState(true);

  /**
   * @createSquare is used to create a div
   * element and insert the value stored at certain
   * index provided in the function
   * and return the div
   */

  const createSquare = (index) => {
    return (
      <div className="cell" onClick={() => onclick(index)}>
        {prevBoard[index]}
      </div>
    );
  };

  /**
   * @onclick function is used to trigger
   * an event whenever user clicks on the
   * cell
   * and update the cell value from null to
   * either "X" or "O" depending on the turn
   * value
   * @setBoard is used to update the previous Board
   * @seNext is used to upadte the turn value from
   * true to false and vice-versa
   * sothat the other guy gets a chance
   */

  const onclick = (index) => {
    if (prevBoard[index] || gameover(prevBoard) || count === 9) {
      return;
    }
    let newBoard = [...prevBoard];
    newBoard[index] = turn ? "X" : "O";
    setBoard(newBoard);
    setNext(!turn);
    setCount(count + 1);
  };

  /**
   * @gameover function checks whether
   * the player has won the game or not
   * by using the winner combinations
   *
   */

  const gameover = (prevBoard) => {
    let winnerCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winnerCombinations.length; i++) {
      let [a, b, c] = winnerCombinations[i];
      if (
        prevBoard[a] &&
        prevBoard[a] === prevBoard[b] &&
        prevBoard[b] === prevBoard[c]
      ) {
        return prevBoard[0];
      }
    }
    return null;
  };

  /**
   * if player has won the game then
   * the status variabe is set to " the winner is
   * and player's name"
   * else
   * it will display the next player's turn
   */

  let status = gameover(prevBoard);

  status = status
    ? `The winner is ${status}`
    : `Now it is ${turn ? "X" : "O"} 's turn`;
  if (count === 9) {
    status = `The Game has Drawn`;
  }
  /**
   * the jsx consists of status to display
   * the status of the game
   * @createSquare is used to create the cell
   *
   */

  return (
    <>
      {status}
      <div className="row">
        {createSquare(0)} {createSquare(1)}
        {createSquare(2)}
      </div>
      <div className="row">
        {createSquare(3)} {createSquare(4)} {createSquare(5)}
      </div>
      <div className="row">
        {createSquare(6)} {createSquare(7)} {createSquare(8)}
      </div>
    </>
  );
}
