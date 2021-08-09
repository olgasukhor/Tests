import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
    const { todos, onComplete, onRemove, createToDo } = props;

    return <div className="todo-list">
        {
            todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onComplete={onComplete}
                    onRemove={onRemove}
                    createToDo={createToDo}
                />
            )
        }
    </div>
}