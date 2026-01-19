import "../sass/main.scss";

const input = document.getElementById("input");
const items = document.querySelectorAll("li");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();

  items.forEach((item) => {
    if (item.textContent.toLowerCase().includes(texto)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});
