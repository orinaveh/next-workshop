"use client";
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(1);
    const [todo, setTodo] = useState<{
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    } | null>(null);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        fetch(`https://jsonplaceholder.typicode.com/todos/${newCount}`).then(
            (response) => response.json().then(setTodo)
        )
    };

    const decrement = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`).then(
            (response) => response.json().then(setTodo)
        );
    }, []);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
        </div>
    );
};

export default Counter;