// Função para definir a rotação ponteiros
const hourHand = document.querySelector(".hand.hours");
const minuteHand = document.querySelector(".hand.minutes");
const secondHand = document.querySelector(".hand.seconds");

// Função atualizar o relógio
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // Calcular rotação dos ponteiros
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360;
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  //Aplica rotação correta
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}
// Inicializa o relógio e atualiza a cada segundo
setInterval(updateClock, 1000);
updateClock();
