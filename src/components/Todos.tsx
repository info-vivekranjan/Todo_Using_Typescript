import React, { useState } from 'react'
import { Todo } from '../model/TodoInterface'
import TodoList from './TodoList';

const Todos: React.FC = () => {
    const [query, setQuery] = useState<string>('')
    const [todoData, setTodoData] = useState<Todo[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
    }

    const addTodo = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        if (query !== '') {
            const payload = {
                id: Date.now(),
                title: query,
                status: false
            }
            setTodoData([...todoData, payload])
            setQuery('');
        }
    }

    console.log(todoData);

    return (
        <>
            <h1>Todos List</h1>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter todos" onChange={handleChange} value={query} style={{ fontSize: '18px', padding: '10px', borderRadius: '10px' }} />
                <input type="submit" value="Add" />
            </form>
            <TodoList todos={todoData} />
        </>
    )
}

export default Todos