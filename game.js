const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winnerMessage = document.getElementById("winnerMessage");
const restartButton = document.getElementById("restartButton");

let currentPlayer = "X";
let isGameActive =true;

//winning combinations

const winningCombinations = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const handleCellClick = (e) =>
{
    const cell = e.target;

    if(!isGameActive || cell.classList.contains("taken"))
        return;

    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if(checkWinner())
    {
        winnerMessage.textContent = `${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (isDraw()) 
    {
        winnerMessage.textContent = "It's a draw!";
        isGameActive = false;
        return;
      }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

//check for a win

const checkWinner = () =>
{
    return winningCombinations.some((combination)=>
    {
        return combination.every((index)=>
        {
            return cells[index].textContent === currentPlayer;
        });
    });
};

//check for draw

const isDraw = () =>
{
    return[...cells].every((cell)=> cell.classList.contains("taken"));
};

//restart game

const restartGame = () =>
{
    currentPlayer = "X";
    isGameActive = true;
    winnerMessage.textContent ="";
    cells.forEach((cell)=>
    {
        cell.textContent="";
        cell.classList.remove("taken");
    });
};

//Add event Listener
cells.forEach((cell)=> cell.addEventListener("click",handleCellClick));
restartButton.addEventListener("click",restartGame);
