import "../sass/main.scss";
const button = document.getElementsByTagName("button")[0];
const input = document.getElementById("input");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = ""; //para limpiar el campo del input después de agregar el ítem
});
