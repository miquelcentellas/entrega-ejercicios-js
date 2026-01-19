import "../sass/main.scss";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskListUl");
const clearBtn = document.getElementById("clearCompleted");

// Cargar tareas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Añadir tarea
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false,
  });

  input.value = "";
  saveAndRender();
});

// Renderizar tareas
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveAndRender();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
  });
}

// Eliminar tareas completadas
clearBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveAndRender();
});

// Guardar y renderizar
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
