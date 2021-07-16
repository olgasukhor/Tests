(function () {
    const searchForm = document.querySelector('#search-form');

    const validateField = createValidation();

    const innerPictureBlock = document.querySelector('#pictures');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const value = event.target.querySelector('input').value;

        const renderPictures = object => object.results.forEach((obj) => {
            innerPictureBlock.appendChild(
                createImageElement(obj)
            );
        })
        if (validateField(value)) {
            fetchPictures(value)
                .then(results => results.json())
                .then(clean(innerPictureBlock))
                .then(res => renderPictures(res))
        }
    });
})();
