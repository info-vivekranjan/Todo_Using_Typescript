import React from 'react'
import { Todo } from '../model/TodoInterface'

interface Props {
    todos: Todo[]
    setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodoData }) => {
    const deleteTodo = (id: number) => {
        const filteredTodos = todos.filter((item) => item.id !== id)
        setTodoData(filteredTodos)
    }
    const toggleTodo = (id: number) => {
        const filteredTodos = todos.map((item) => item.id === id ? { ...item, status: !item.status } : item)
        setTodoData(filteredTodos)
    }
    return (
        <>
            {
                todos.map((todo) => {
                    return <div style={{ border: '1px solid silver', padding: '7px', margin: '10px' }} key={todo.id}>
                        <h3>{todo.title}</h3>
                        <h3>{todo.status?"Done":"Pending"}</h3>
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => toggleTodo(todo.id)}>edit</button>
                    </div>
                })
            }
        </>
    )
}

export default TodoList