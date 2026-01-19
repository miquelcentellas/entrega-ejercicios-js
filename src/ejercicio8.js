import "../sass/main.scss";

const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  // Contar caracteres sin espacios ni saltos de línea
  const characters = text.replace(/\s/g, "").length;
  charCount.textContent = characters;

  // Contar palabras (ignora espacios y saltos de línea extra)
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  wordCount.textContent = text.trim() === "" ? 0 : words.length;
});
