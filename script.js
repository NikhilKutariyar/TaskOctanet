document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categoryInput = document.getElementById('categoryInput');
    const dueDateInput = document.getElementById('dueDateInput');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <span class="category">[${categoryInput.value}]</span>
        <span class="due-date">${dueDateInput.value}</span>
        <div class="task-actions">
            <button class="complete-task">✔️</button>
            <button class="delete-task">❌</button>
            <button class="priority-task">🔺</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    dueDateInput.value = '';

    li.querySelector('.complete-task').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-task').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.querySelector('.priority-task').addEventListener('click', () => {
        li.classList.toggle('priority');
    });
}
