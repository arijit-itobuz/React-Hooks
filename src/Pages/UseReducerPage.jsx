/*
- useReducer is a React Hook that lets you add a reducer to your component.
- 
*/

import React, { useState, useReducer } from 'react';

export default function UseReducerPage() {
  const reducer = (state, action) => {
    if (action.type === 'decrement') {
      return { count: state.count - 1, todo: state.todo };
    } else if (action.type === 'increment') {
      return { count: state.count + 1, todo: state.todo };
    } else if (action.type === 'addTodo') {
      return {
        count: state.count,
        todo: [...state.todo, action.payload.value],
      };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, todo: [] });

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };
  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'addTodo', payload: { value: value } });
    setValue('');
  };

  const [value, setValue] = useState('');
  return (
    <>
      <div>
        <button onClick={decrement} className='btn'>
          Decrement
        </button>
        <span className='mx-2'>{state.count}</span>
        <button onClick={increment} className='btn'>
          Increment
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
            type='text'
            className=' border border-black p-1'
          />
        </form>
        <ul>
          {state.todo?.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
