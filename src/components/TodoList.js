import React from 'react'
import Todo from './Todo'

export default function TodoList(props){
    return <ul className="todo-list">
        {props.todos.map(todo => <li key={todo.id}>
        <Todo details={todo} />
        <button className="btn-outline btn-delete" onClick={() => props.onDeleteClick(todo.id)}>Delete</button>
        </li>)}
    </ul>
}