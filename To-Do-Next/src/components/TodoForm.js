import {useState} from "react";

export const TodoForm = (props) => {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        onSubmit(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </form>
      )
}