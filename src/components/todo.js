import React from 'react';
import "./todo.css";

const Todo = (props) => {
    function handleDeleteTodo() {
        props.deleteTodo(props.index);
        console.log(props.index);
    }
    return (
        <div className="todo">
            <span>{props.index} {props.name}</span>
            <div className="deleteButton">
                <input className="checkBox" type="checkbox" />
                <span className="checkBoxContainer">Done</span>
                <button className="deleteButton" onClick={handleDeleteTodo}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;