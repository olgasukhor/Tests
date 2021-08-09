import CheckboxLabels from './Check.js';
import backet from '../images/pngegg.png';

export const TodoItem = (props) => {
  const { todo, onComplete, onRemove, } = props;

  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        < CheckboxLabels onClick={() => onComplete(todo.id)} />

        <button onClick={() => onRemove(todo.id)}>
          <img src={backet} alt='' />
        </button>
      </div>
    </div>
  )
}

