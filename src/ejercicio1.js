import "../sass/main.scss";
const button = document.querySelector("button");

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomRGB();
});
