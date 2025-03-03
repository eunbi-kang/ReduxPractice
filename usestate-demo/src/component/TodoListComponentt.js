/* 배열 상태 관리 예제 */
//TodoListComponent.js
import React, { useState } from 'react'

function TodoListComponent() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const handleAddTodo = () => {
        if(input.trim() !== ""){
            setTodos([...todos, input]);
            setInput("");
        }
    }
    return (
        <div>
            <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoListComponent