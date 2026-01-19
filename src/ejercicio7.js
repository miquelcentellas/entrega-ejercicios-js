import "../sass/main.scss";

const lenght = document.getElementById("length");
const passwordDisplay = document.getElementById("password-display");
const generateBtn = document.getElementById("generate");

const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_.,+";

generateBtn.addEventListener("click", () => {
  const passwordLength = parseInt(lenght.value);
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres[randomIndex];
  }

  passwordDisplay.value = password;
});
