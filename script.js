const hourHand = document.querySelector(".hand.hours");
const minuteHand = document.querySelector(".hand.minutes");
const secondHand = document.querySelector(".hand.seconds");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360;
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
