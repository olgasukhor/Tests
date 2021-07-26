const addClassToDo = (div, h3, p, deleteBtn, like) => {
    h3.classList.add('todoTitle');
    p.classList.add('todoText');
    div.classList.add('todoItem');
    deleteBtn.classList.add("todo-trash");
    like.classList.add('like');
}

function listenDeleteTodo(element) {
    element.addEventListener("click", () => {
        element.parentElement.remove();
    });
}
const likeOnclick = (element) => {
    element.addEventListener('click', () => {
        element.classList.toggle("likeOnClick")
    })
}
const createIcon = () => {
    const icon = document.createElement("img");
    icon.classList.add("deleteIcon");
    return icon;
}

const renderTodo = (todo) => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3')
    const p = document.createElement('p');

    div.appendChild(h3);
    div.appendChild(p);
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(createIcon());
    const like = document.createElement("span");
    addClassToDo(div, h3, p, deleteBtn, like);

    div.appendChild(deleteBtn);
    div.appendChild(like);

    h3.textContent = todo.title;
    p.textContent = todo.body;

    listenDeleteTodo(deleteBtn);
    likeOnclick(like);

    return div;
}
