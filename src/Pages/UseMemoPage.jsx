/*
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- memoization or memoisation is an optimization technique used primarily to speed up computer programs 
    by storing the results of expensive function calls and returning the cached result
    when the same inputs occur again.
*/

import React, { useState, useMemo, useEffect } from 'react';

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState('light');
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }
  }, [theme]);

  const slowFunction = (number) => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  };
  const double = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log('themeStyle changed');
  }, [themeStyle]);

  return (
    <>
      <input
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
        type='number'
        className='border border-black p-1'
      />
      <button
        onClick={() => {
          setTheme((pre) => (pre === 'light' ? 'dark' : 'light'));
        }}
        className='btn'
      >
        Theme
      </button>
      <div style={themeStyle}>double: {double}</div>
    </>
  );
}
