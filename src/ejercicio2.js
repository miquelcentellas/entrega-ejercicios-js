import "../sass/main.scss";
const button = document.querySelector("button");

let contador = 0;
document.addEventListener("click", () => {
  contador++;
});

button.addEventListener("click", () => {
  document.getElementById("clickCount").textContent = contador;
  contador--; //resta 1 para no contar el click del botón
});
