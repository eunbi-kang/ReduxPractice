// UseformComponent.js
import React, { useState } from 'react';
const UseFormComponent = () => {
    const [user, setUser] = useState({ name: '', age: '' });
    const handleChange = (e) => {
        const { name, value } = e.target; setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return (
        <div>
            <input type="text" name="name" value={user.name} onChange={handleChange}
                placeholder="Name"
            />
            <input type="number" name="age" value={user.age}
                onChange={handleChange}
                placeholder="Age" />
            <p>
                User: {user.name}, Age: {user.age}
            </p>
        </div>
    );
};
export default UseFormComponent
     