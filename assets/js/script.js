// Variables
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const contadorTotal = document.getElementById("totalTareas");
const contadorRealizadas = document.getElementById("tareasRealizadas");
let idTarea = 0;

// Función para agregar una tarea
function agregarTarea() {
  const tareaTexto = inputTarea.value.trim();
  if (tareaTexto !== "") {
    idTarea++;
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${idTarea}</td>
      <td>${tareaTexto}</td>
      <td><input type="checkbox" onchange="marcarTarea(this)"></td>
      <td><button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">X</button></td>
      `;
    listaTareas.appendChild(nuevaFila);
    inputTarea.value = "";
    actualizarContadores();
  }
}

// Función para marcar/desmarcar una tarea
function marcarTarea(checkbox) {
  const fila = checkbox.parentNode.parentNode;
  fila.classList.toggle("realizada");
  actualizarContadores();
}

// Función para actualizar contadores
function actualizarContadores() {
  const totalTareas = listaTareas.children.length;
  const tareasRealizadas = document.querySelectorAll(
    "#listaTareas tr.realizada"
  ).length;
  contadorTotal.textContent = totalTareas;
  contadorRealizadas.textContent = tareasRealizadas;
}

// Event Listener para el botón "Agregar"
btnAgregar.addEventListener("click", agregarTarea);

// Función para eliminar una tarea
function eliminarTarea(boton) {
  const fila = boton.parentNode.parentNode;
  listaTareas.removeChild(fila);
  actualizarContadores();
}
