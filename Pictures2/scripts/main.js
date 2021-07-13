(function () {
    const searchForm = document.querySelector('#search-form');
    const validateField = createValidation();

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const value = event.target.querySelector('input').value;

        const innerPictureBlock = document.querySelector('#pictures');

        const createPictures = object => object.results.forEach((obj) => {
            innerPictureBlock.appendChild(
                createImageElement(obj)
            );
        })
        if (validateField(value)) {
            fetchPictures().then(results => {
                results.json()
                    .then(res => createPictures(res)
                    );
            })
        }
    });
})();
