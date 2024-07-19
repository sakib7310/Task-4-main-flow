// list create 
let tasks = [];

// Function to show 
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // for clearing task

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? '🔄Undo' : '✅DONE';
    completeButton.onclick = () => toggleTask(index);
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' 🧹 REMOVE';
    deleteButton.onclick = () => deleteTask(index);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// for new task add 
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Function to tick completed 
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to delete task from list
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// for rendering all the list after checking 
renderTasks();
