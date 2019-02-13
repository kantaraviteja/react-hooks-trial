import React from 'react';
import Todo from './todo';
import "./TodoList.css";
const { useState } = React;

const TodoList = (props) => {
    
    let [ todoList, setTodoList ] = useState([]);
    let [ newTodoName, setNewTodoName ] = useState("");
    let value;
    const handleInputChange = (e) => {
        setNewTodoName(e.target.value);
    }
    const addNewTodo = () => {
        setTodoList([...todoList, {
            name: newTodoName,
            index: todoList.length
        }]  );
    }
    const deleteTodo = (index) => {
        setTodoList(todoList.filter(todo => todo.index !== index));
    }
    return(
        <div className = "todoListContainer">
            <div className="inputBox">
                <input
                    value = {value}
                    onChange = { handleInputChange }
                />
                <button onClick = { addNewTodo }>Add</button>
            </div>
            <div className="todoList">  
                {
                    todoList.map((todo) => (
                        <Todo {...todo} deleteTodo={deleteTodo} />
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;