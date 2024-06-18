function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    
    let li = document.createElement('li');
    li.textContent = taskInput.value;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = '';
}