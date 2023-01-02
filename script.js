// Select Components
const d = document;
const select = (q) => { return (d.querySelectorAll(q).length <= 1) ? d.querySelector(q) : d.querySelectorAll(q); }

const todoInput = select('.form-todo input'),
    addTodo = select('.add-todo'),
    todoItems = select('.todo-items');

// Event
addTodo.addEventListener('click', addTodoHandler);

// Functions
function addTodoHandler(e) {

    e.preventDefault(); // Disable Submit Form

    if (!todoInput.value.trim().length) // Checks that the input is empty

        alert("Please Write Input") // If the entry is empty, this message will be displayed.

    else {
        const todoItemsDiv = d.createElement('div');

        todoItemsDiv.innerHTML = `<li>${todoInput.value}</li><span><i class="far fa-square-check"></i></span><span><i class="fa-regular fa-trash-can"></i></span>`

        todoItemsDiv.classList.add('list-todo');

        todoItems.appendChild(todoItemsDiv);

        todoInput.value = "";
    }

}