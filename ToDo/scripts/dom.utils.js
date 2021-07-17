const titleForm = document.querySelector('.form-title');
const descriptionForm = document.querySelector('.description');
const out = document.querySelector('.out');

const listenDeleteTodo = (element) => {
    element.addEventListener("click", () => {
        element.parentElement.remove();
    });
}
const createItem = () => {
    let div = document.createElement('div');
    let title = document.createElement('div');
    let text = document.createElement('div');
    title.innerHTML = titleForm.value;
    text.innerHTML = descriptionForm.value;
    div.appendChild(title);
    title.appendChild(text);
    div.classList.add('todoItem');
    title.classList.add('todoTitle');
    text.classList.add('todoText');

    const icon = document.createElement("img");
    icon.src = 'images/pngegg.png';
    icon.classList.add("deleteBtn");

    div.appendChild(icon);
    out.appendChild(div);
    titleForm.value = '';
    descriptionForm.value = '';

    listenDeleteTodo(icon);

    return div;
}

