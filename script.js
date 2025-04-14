document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskText = document.getElementById("task").value;
  const taskTime = document.getElementById("time").value;

  if (taskText === "" || taskTime === "") {
    alert("Please enter both task and time!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `<span>${taskTime} - ${taskText}</span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>`;
    
  taskList.appendChild(li);
  saveTasks();
  document.getElementById("task").value = "";
  document.getElementById("time").value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("completed");
  saveTasks();
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  saveTasks();
}

function saveTasks() {
  const taskList = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", taskList);
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
  }
}
