(function () {
    const searchForm = document.querySelector('#search-form');
    const innerPictureBlock = document.querySelector('#pictures');
    
    const validateField = createValidation();
    
    // Move to dom.utils.js
    const cleanElement = (element) => {
           element.innerHTML = '';
    };
    
    const renderPictures = (results, parentElement) => results.forEach((obj) => {
        innerPictureBlock.appendChild(
            createImageElement(obj)
        );
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const value = event.target.querySelector('input').value;
        
        if (validateField(value)) {
            fetchPictures(value)
                .then(results => results.json())
                .then(res => {
                    cleanElement(innerPictureBlock);
                    renderPictures(res.results, innerPictureBlock);
                });
        }

    });
})();
