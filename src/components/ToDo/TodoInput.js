import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todoActions'

const TodoInput = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    
    const onSubmitForm = event => {
        event.preventDefault()
        dispatch(addTodo(searchText))
    }
    return (
        <div style={{ margin: '3rem'}}>
            <form onSubmit={e => onSubmitForm(e)}>
                <div className="ui fluid action input">
                    <input
                        type="text"
                        value={searchText}
                        placeholder="Type any task..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="ui button">Search</div>
                </div>
            </form>
        </div>
    )
}

export default TodoInput
