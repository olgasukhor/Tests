const titleForm = document.querySelector('.form-title');
const descriptionForm = document.querySelector('.description');
const toDoForm = document.querySelector('#toDoForm');
const btn = document.querySelector('.push')
const out = document.querySelector('.out');
const value = document.querySelector('.form-title').value;

const URI = 'https://jsonplaceholder.typicode.com/posts';

const fetchToDo = async () => {
    const response = await fetch(URI);
    const result = await response.json();
    return console.log(result);
};

const createElement = post => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.textContent = post.title;
    p.textContent = post.body;
    h2.appendChild(p);
    div.appendChild(h2);
    return div;
};
const renderItem = posts => {
    posts.object.forEach(post => {
        out.appendChild(createElement(post));
    })
}

if (value == "") {
    fetchToDo()
        .then(res => { renderItem(res) })

}

const action = () => {
    toDoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchToDo();

    });
};

createItem();