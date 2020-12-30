import React from 'react'
import { useDispatch } from 'react-redux'

import { updateTodo, deleteTodo } from '../../redux/actions/todoActions'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()

    if (!todo) return null
    
    return (
        <tr>
            <td data-label="No">#{todo.id}</td>
            <td data-label="Title">{todo.name}</td>
            <td data-label="Edit" onClick={() => null} style={{ color: 'blue', textAlign: 'center' }}>
                <i className="edit icon"></i>
            </td>
            <td
                data-label="Delete"
                style={{ color: 'red', textAlign: 'center' }}
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                <i className="trash icon"></i>
            </td>
        </tr>
    )
}

export default TodoItem
