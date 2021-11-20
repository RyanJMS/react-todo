import React from 'react'

export default function Todo(props){
    const {details} = props
    if(!details){
        return null
    }
    return <div className="todo">
        <div className="todo-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
    </div>
}