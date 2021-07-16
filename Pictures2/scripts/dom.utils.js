const createImageElement = (obj) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    div.appendChild(image);
    image.src = obj.urls.regular;
    return div;
}

const clean = (element) => {
    element.innerHTML = '';
};