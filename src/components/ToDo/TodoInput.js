import React, { useState } from 'react'
import { v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todoActions'

const TodoInput = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    const onSubmitForm = event => {
        event.preventDefault()
        dispatch(addTodo({
            id: uuid(),
            name: name
        }))
        setName('')
    }
    return (
        <div style={{ margin: '3rem'}}>
            <form onSubmit={e => onSubmitForm(e)}>
                <div className="ui fluid action input">
                    <input
                        type="text"
                        value={name}
                        placeholder="Type any task..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="ui button">Add</button>
                </div>
            </form>
        </div>
    )
}

export default TodoInput
