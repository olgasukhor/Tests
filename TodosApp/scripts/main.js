// IIFE - Immidiately Invoked Function Expression
(() => {
    const form = document.querySelector('#todo-form');
    const list = document.querySelector('#todos');
    const [
        getState,
        setState,
        onUpdate
    ] = createState([]);

    onUpdate((state) => {
        list.innerHTML = '';

        state.forEach((todo) => {
            list.appendChild(
                renderTodo(todo)
            );

        })

    });

    document.addEventListener('DOMContentLoaded', () => {
        fetchPosts().then(response => {
            setState(response.slice(0, 4));
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const {
            title,
            content
        } = e.target.elements;

        if (!title.value || !content.value) {
            return;
        }

        createPost({
            title: title.value,
            body: content.value
        }).then((result) => {
            setState([
                result,
                ...getState()
            ])
        });
        title.value = '';
        content.value = '';
    });
})();
