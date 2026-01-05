function getNextNewYear() {
  const now = new Date();
  return new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
}

const targetDate = getNextNewYear();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const status = document.getElementById("status");

function updateCountdown(){
  const now = new Date();
  const diff = targetDate - now;

  if(diff <= 0){
    d.textContent = h.textContent = m.textContent = s.textContent = "00";
    status.textContent = "🎉 Happy New Year!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  d.textContent = String(days).padStart(2, "0");
  h.textContent = String(hours).padStart(2, "0");
  m.textContent = String(minutes).padStart(2, "0");
  s.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
