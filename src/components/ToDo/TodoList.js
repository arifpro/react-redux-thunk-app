import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            <section style={{ margin: '3rem' }}>
                <table className="ui celled table">
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th style={{ width: '25%' }}>No</th>
                            <th>Title</th>
                            <th style={{ width: '10%' }}>Update</th>
                            <th style={{ width: '10%' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos && todos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default TodoList
