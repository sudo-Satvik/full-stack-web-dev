document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTask(task));

  // Add task button event listener
  addTaskBtn.addEventListener("click", () => {
    addTask();
  });

  // Add task using Enter key
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();  // Prevent default behavior (e.g., form submission)
      addTask();
    }
  });

  // Function to add a task
  function addTask() {
    const taskText = todoInput.value.trim();
    if (!taskText) {
      document.querySelector('.toast').classList.add('d-block');
      setTimeout(() => {
        document.querySelector('.toast').classList.remove('d-block')
      }, 2000)
    }
    else{
      const taskObj = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      tasks.push(taskObj);
      // Save task to localStorage
      saveTask();
      renderTask(taskObj);
      console.log(tasks);
      todoInput.value = ""; // Clear input field
    }
  }

  // Save tasks to local storage
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Render task to the browser
  function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<p>${task.text}</p> <i class='bx bxs-trash'></i>`;

    // Handle task completion toggle
    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'I') return;  // Ignore clicks on the trash icon
      task.completed = !task.completed;
      li.classList.toggle('completed');
      saveTask();
    });

    // Handle task deletion
    li.querySelector('i').addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent parent click handler
      tasks = tasks.filter((t) => t.id !== task.id);  // Remove task from tasks array
      saveTask();  // Save updated tasks array to localStorage
      li.remove();  // Remove task from the DOM
    });

    todoList.appendChild(li);
  }
});
