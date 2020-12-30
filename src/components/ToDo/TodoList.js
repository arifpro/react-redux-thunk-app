import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    return (
        <div>
            <section style={{ margin: '3rem' }}>
                <h3>TodoItem</h3>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default TodoList
