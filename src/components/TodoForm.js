import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // add todo
        if (value.trim() !== '') {
            addTodo(value);
        } else {
            alert('Заметка не может быть пустой. Введите текст заметки.')
        }
        // clear form after submission
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input"
                   placeholder='Введите текст заметки'/>
            <button type="submit" className='todo-btn'>Сохранить</button>
        </form>
    )
}