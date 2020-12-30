import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/todoActions'

const TodoInput = () => {
    const dispatch = useDispatch()
    
    const onSubmitForm = event => {
        event.preventDefault()
        dispatch(addTodo())
    }
    return (
        <div style={{ margin: '3rem'}}>
            <div className="ui fluid action input">
                <input type="text" placeholder="Search..." />
                <div className="ui button">Search</div>
            </div>
        </div>
    )
}

export default TodoInput
