// Temporary Storage for Todo Items
let todos = [];

// Function Storage Add Todo Item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value === '') {
        alert('Tolong isi kedua item yang harus dilakukan dan tanggalnya.');
    } else {
        const newTodo = {
            task: todoInput.value,
            date: todoDate.value
        };

        // Add the new todo to the todos array
        todos.push(newTodo);

        renderTodos();

        // Clear Input Fields
        todoInput.value = '';
        todoDate.value = '';
    }
}

/// Function to render todo items to DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.task} <span class="text-sm font-semibold text-gray-900">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

// Function to Remove All Todo Items
function removeAllTodo() { 
    todos = [];

    // Re-Render the empty list
    renderTodos();
}

// Function to Filter Todo Items
function filterTodo() {
}