const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((t, idx) => {
    const li = document.createElement('li');
    li.className = 'card';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = t.done;
    checkbox.addEventListener('change', () => {
      tasks[idx].done = checkbox.checked;
      save();
    });
    const span = document.createElement('span');
    span.textContent = t.text;
    span.style.marginLeft = '0.5rem';
    span.contentEditable = true;
    span.addEventListener('blur', () => {
      tasks[idx].text = span.textContent.trim();
      save();
    });
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      tasks.splice(idx,1);
      save();
    });
    li.append(checkbox, span, del);
    taskList.appendChild(li);
  });
}

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, done:false });
  taskInput.value = '';
  save();
}

document.getElementById('add-task').addEventListener('click', addTask);
taskInput.addEventListener('keyup', (e)=>{ if(e.key==='Enter') addTask(); });

renderTasks();
