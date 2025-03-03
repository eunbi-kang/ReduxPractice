/* 문자열 입력 관리 예제 */
import React, { useState } from 'react'

function InputComponent() {
    const [text, setText] = useState("");
    const handleChange =(e)=> {
        setText(e.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleChange}
                placeholder="문자열 입력" />
                <br/>
                <p>입력문자: {text}</p>
        </div>
        
        
    )
}

export default InputComponent