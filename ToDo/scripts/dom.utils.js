
const listenDeleteTodo = (element) => {
    element.addEventListener("click", () => {
        element.parentElement.remove();
    });
}
const likeOnclick = (element) => {
    element.addEventListener('click', () => {
        element.src = "images/like_favorite_heart_3524.png";
    })
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

    const icon = document.createElement('img');
    icon.src = 'images/pngegg.png';
    icon.classList.add('deleteBtn');

    const like = document.createElement("img");
    like.src = 'images/like-48_45157.png';
    like.classList.add('like');

    div.appendChild(like);
    div.appendChild(icon);

    out.appendChild(div);
    titleForm.value = '';
    descriptionForm.value = '';

    listenDeleteTodo(icon);
    likeOnclick(like);

    return div;
}

