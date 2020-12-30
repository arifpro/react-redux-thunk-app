import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../../redux/actions/todoActions'

const TodoItem = ({ todo }) => {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    const dispatch = useDispatch()

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch(updateTodo({
            id: todo.id,
            name: name
        }))
        setEditable(false)
    }

    if (!todo) return null
    
    return (
        <tr>
            <td data-label="No">#{todo.id}</td>
            <td data-label="Title">
                {
                    editable ? 
                    <form class="ui fluid action input focus" style={{ width: '100%' }} onSubmit={(e) => onSubmitForm(e)}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type="submit" className="ui button">Update</button>
                    </form>
                    : todo.name
                }
            </td>
            <td
                data-label="Edit"
                style={{ color: 'blue', textAlign: 'center' }}
                onClick={() => setEditable(!editable)}
            >
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
