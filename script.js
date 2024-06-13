document.addEventListener('DOMContentLoaded', () => {
    
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = document.getElementById("todo-input").value;
        console.log('text', text);
        addTodo(text)
    });

    /**
     * 
     * @param {string} str // add a new string value to the list
     */
    function addTodo(str) {
    const li = document.createElement("li");
    li.textContent = str;
    li.className = "todo-item"

    const removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.className = "removeButton";

    removeButton.addEventListener('click', () => {
        todoList.removeChild(li);
    })

    li.appendChild(removeButton);
    todoList.appendChild(li);
}
});