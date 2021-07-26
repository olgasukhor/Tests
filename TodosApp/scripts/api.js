(() => {
    const URI = 'https://jsonplaceholder.typicode.com/posts';

    const fetchPosts = () => 
        fetch(URI)
            .then(response => response.json());

    const createPost = (obj) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: obj.title,
                    body: obj.body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
    }

    window.fetchPosts = fetchPosts;
    window.createPost = createPost;
})();