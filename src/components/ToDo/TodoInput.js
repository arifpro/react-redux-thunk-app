import React from 'react'

const TodoInput = () => {
    return (
        <div style={{ margin: '3rem'}}>
            <h3>Todo Input</h3>
            <div class="ui fluid action input">
                <input type="text" placeholder="Search..." />
                <div class="ui button">Search</div>
            </div>
        </div>
    )
}

export default TodoInput
