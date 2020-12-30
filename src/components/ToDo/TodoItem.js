import React from 'react'

const TodoItem = () => {
    return (
        <tr>
            <td data-label="No">#1</td>
            <td data-label="Title">24</td>
            <td data-label="Edit" onClick={() => null} style={{ color: 'blue' }}>
                <i class="edit icon"></i>
            </td>
            <td data-label="Delete" onClick={() => null} style={{ color: 'red' }}>
                <i class="trash icon"></i>
            </td>
        </tr>
    )
}

export default TodoItem
