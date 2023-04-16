const startBtn = document.querySelector("#start");

// округлуние
// Math.floor => Math.floor(2.9) => 2
// Math.round => Math.round(2.4) => 2, Math.round(2.6) => 3;
// Math.ceil => Math.ceil(3.1) => 4

// Math.random() * 3 => 2.56...

// parseInt()

function start() {
  //0 для камня, 1 для бумаги, 2 для ножниц
  let compMove = Math.floor(Math.random() * 3);
  let userMove = parseInt(prompt("Камень, бумага или ножницы?"));

  console.log(userMove);
  //   let numFromUserMove = parseInt(userMove);
  // && - И / AND
  // || - или / OR
  if (isNaN(userMove) || userMove > 2 || userMove < 0) {
    alert("Введите число 0 - 2");
  } else if (compMove === 0 && userMove === 1) {
    alert("Вы выиграли с помощью бумаги");
  } else if (compMove === 0 && userMove === 2) {
    alert("Комп выиграл Вас с помощью камня");
  } else if (compMove === 1 && userMove === 0) {
    alert("Комп выиграл с помощью бумаги");
  } else if (compMove === 1 && userMove === 2) {
    alert("Вы выиграли с помощью ножниц");
  } else if (compMove === 2 && userMove === 0) {
    alert("Вы выиграли с помощью камня");
  } else if (compMove === 2 && userMove === 1) {
    alert("Комп выиграл с помощью ножниц");
  } else {
    alert("У вас ничья");
  }
}

startBtn.onclick = () => start();