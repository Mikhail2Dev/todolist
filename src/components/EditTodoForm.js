import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        if (value.trim() !== '') {
            editTodo(value, task.id);
        } else {
            alert('Заметка не может быть пустой. Введите текст заметки.')
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input"
                   placeholder='Изменение заметки'/>
            <button type="submit" className='todo-btn'>Сохранить</button>
        </form>
    )
}