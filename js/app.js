const updateDisplay = () => {
    const display = document.getElementById('display');
    const ul = document.createElement('ul');
    ul.classList.add('display-ul');
    const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
    todoList.forEach((item, idx) => {
        const li = document.createElement('li');
        li.classList.add('listItem');
        li.innerHTML = `${item} <button onclick="deleteItem('${idx}')" class="btn-2">Delete</button>`;
        ul.appendChild(li);
    });

    display.innerHTML = '';
    display.appendChild(ul);
};

document.getElementById('todo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    try {
        const input = document.getElementById('todo-input').value;
        const saveData = JSON.parse(localStorage.getItem('todo-list') || '[]');
        localStorage.setItem('todo-list', JSON.stringify([...saveData, input]));
        updateDisplay();
        document.getElementById('todo-input').value = '';
    } catch (error) {
        console.error('Error saving data:', error);
    }
});

const deleteItem = (idx) => {
    const confirmYes = confirm('Are you sure you want to delete');
    if (confirmYes) {
        const data = JSON.parse(localStorage.getItem('todo-list')) || [];
        const storedData = [...data.slice(0, idx), ...data.slice(idx + 1)];
        localStorage.setItem('todo-list', JSON.stringify(storedData));
        updateDisplay();
    } else {
        alert("Data Is Not Deleted");
    }
};

window.addEventListener('load', updateDisplay);