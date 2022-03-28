import React from 'react'
import { Todo } from '../model/TodoInterface'

interface Props {
    todos: Todo[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <>
            {
                todos.map((todo) => {
                    return <div style={{ border: '1px solid silver', padding: '7px', margin: '10px' }} key={todo.id}>
                        <h3>{todo.title}</h3>
                    </div>
                })
            }
        </>
    )
}

export default TodoList