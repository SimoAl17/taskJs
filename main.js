const nameArray = [];

function loadTasks() {
    fetch('https://623436cd6d5465eaa51606d7.mockapi.io/ToDoList_API')
    .then(resp => resp.json())
    .then(createTaskArray)
    .catch(err => console.log(err));
}

function createTaskArray(array) {
    for (const task of array) {
        nameArray.push(task);
    }
    createList(nameArray);

}

function createList(array) {
    const listAddress = document.getElementById('list');
    for (const task of array) {
        const listElement = document.createElement('li', {is: 'list-tag'});
        const node = document.createTextNode(task.name);
        listElement.appendChild(node);
        listElement.setAttribute('task', JSON.stringify(task));
        listAddress.appendChild(listElement);
    }
}


loadTasks();