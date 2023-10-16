import React, { useState, useEffect } from 'react';

const TodoComponent = () => {
    // State variable to store the fetched todos
    const [mytodos, setMyTodos] = useState([]);

    useEffect(() => {
        // Define an async function to fetch the todos
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/todos');

                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }

                const todosData = await response.json();
                console.log(`response = ${JSON.stringify(todosData)}`)
                setMyTodos(todosData);

            } catch (error) {
                console.error('Error fetching todos:', error.message);
            }
        };

        // Call the fetchTodos function
        fetchTodos();
    }, []); // Empty dependency array ensures that the effect runs only once after the initial render

    // Your component rendering logic here, using the mytodos state

    return (
        <div>
            {/* Render your component using the mytodos state */}
        </div>
    );
};

export default TodoComponent;
