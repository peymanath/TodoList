// Select Components
const d = document;
const select = (q) => { return (d.querySelectorAll(q).length <= 1) ? d.querySelector(q) : d.querySelectorAll(q); }

const todoInput = select('.form-todo input'),
    addTodo = select('.add-todo'),
    todoItems = select('.todo-items');
