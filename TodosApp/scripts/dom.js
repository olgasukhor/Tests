const renderTodo = (todo) => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3')
    const p = document.createElement('p');

    div.appendChild(h3)
    div.appendChild(p);

    h3.textContent = todo.title;
    p.textContent = todo.body;

    return div;
}