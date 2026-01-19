import "../sass/main.scss";
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const result = document.getElementById("result");

//VALIDACIONES DE CARACTERES

//validación de campos vacíos implementada en cada escucha de botón

//validación de caracteres no numéricos
input1.addEventListener("input", () => {
  if (isNaN(input1.value) || isNaN(input2.value)) {
    input1.value = "";
    input2.value = "";
    alert("Por favor, ingresa solo números.");
  }
});
input2.addEventListener("input", () => {
  if (isNaN(input1.value) || isNaN(input2.value)) {
    input1.value = "";
    input2.value = "";
    alert("Por favor, ingresa solo números.");
  }
});

//validación de división por cero
input2.addEventListener("input", () => {
  const num2 = parseFloat(input2.value);
  if (num2 === 0) {
    input2.value = "";
    alert("Error: No se puede dividir entre cero.");
    result.textContent = "Resultado: Error";
    return;
  }
});

//escucha de suma
sumarBtn.addEventListener("click", () => {
  if (input1.value === "" || input2.value === "") {
    alert("Por favor, completa ambos campos.");
  }
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = `Resultado: ${num1 + num2}`;
});

//escucha de resta
restarBtn.addEventListener("click", () => {
  if (input1.value === "" || input2.value === "") {
    alert("Por favor, completa ambos campos.");
  }
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = `Resultado: ${num1 - num2}`;
});

//escucha de multiplicación
multiplicarBtn.addEventListener("click", () => {
  if (input1.value === "" || input2.value === "") {
    alert("Por favor, completa ambos campos.");
  }
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = `Resultado: ${num1 * num2}`;
});

//escucha de división
dividirBtn.addEventListener("click", () => {
  if (input1.value === "" || input2.value === "") {
    alert("Por favor, completa ambos campos.");
  }
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = `Resultado: ${num1 / num2}`;
});

//botón para borrar resultados y campos de entrada
const resetearBtn = document.getElementById("resetear");
resetearBtn.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  result.textContent = "Resultado: ";
});
