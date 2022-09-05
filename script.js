const gameBoard = (() => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    return {
      board
    };
})();

const gameLogic = (() => {
    //method to check for winning conditions
    const add = (a, b) => a + b;
    return {
        add
    };
})();

const displayController = (() => {
    //create private variables for each game board cell
    const cell0 = document.querySelector('#cell-0');
    
    //method to output game board array to game board GUI
    const add = (a, b) => a + b;
    return {
      add
    };
})();

const playerFactory = (name, age) => {
    //Player is X or O
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

//Factory Function
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };

//Module Pattern
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

  console.log(gameBoard.board);