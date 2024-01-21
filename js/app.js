const checkLocalStorage = () => {
    const localStorageData = localStorage.getItem('todo-list');
    return localStorageData ? JSON.parse(localStorageData) : [];
};
const saveLocalStorageData = checkLocalStorage();
const updateDisplay = () => {
    const display = document.getElementById('display');
    display.innerHTML = '';
    saveLocalStorageData.forEach((item, idx) => {
        const ul = document.createElement('ul');
        ul.classList.add('display-ul');
        ul.innerHTML = `<li class='listItem'>${item} <button onclick="deleteItem(${idx})" class="btn-2">Delete</button></li>`;
        display.appendChild(ul);
    });
};

updateDisplay();
document.getElementById('todo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    try {
        const input = document.getElementById('todo-input').value;
        const data = [...saveLocalStorageData, input];
        localStorage.setItem('todo-list', JSON.stringify(data));
        console.log('Data input successfully saved');
        updateDisplay();
    } catch (error) {
        console.error('Error saving data:', error);
    }
});

const deleteItem = (idx) => {
    console.log(idx);
};
