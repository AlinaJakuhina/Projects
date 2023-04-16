// clock's hands
const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

// buttons
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#end");

function getDate() {
  // new Date()
  let now = new Date();
  //   console.log(now);
  //   console.log(typeof now);

  //seconds
  const seconds = now.getSeconds();
  //   console.log(seconds);
  const secondsDeg = (seconds / 60) * 360 + 90;
  //   console.log(secondsDeg);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  // minutes
  const minutes = now.getMinutes();
  console.log(minutes);
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  //   const minutesDeg = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  // hours
  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// setInterval
let setInt;
startBtn.onclick = () => (setInt = setInterval(getDate, 1000));
// setInterval(() => console.log("hello"), 1000);
//clearInterval

endBtn.onclick = () => clearInterval(setInt);