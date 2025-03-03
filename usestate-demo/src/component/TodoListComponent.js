/* 배열 상태 관리 */
import React, { useState } from 'react'

function TodoListComponent() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const handleAddTodo = () => {
        if (input.trim !== "" && input.valueOf() !== "") {
            setTodos([ ...todos, input ]);
            setInput("");
        }
    }
    return (
        <div>
            <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)} placeholder="Add a todo" />
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    )
}

export default TodoListComponent