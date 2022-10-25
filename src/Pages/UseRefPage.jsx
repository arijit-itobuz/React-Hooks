/*
- useRef is a React Hook that lets you reference a value that’s not needed for rendering
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render)
- 
*/

import React, { useState, useEffect, useRef } from 'react';

export default function UseRefPage() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [renderCount, setRenderCount] = useState(0);
  const refRenderCount = useRef(0);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  // run only one useEffect at time of demo

  // useEffect(() => {
  //   setRenderCount((e) => e + 1);
  // }, [value]);

  // useEffect(() => {
  //   refRenderCount.current = refRenderCount.current + 1;
  // });

  // useEffect(() => {
  //   console.log('value: ', value);
  //   prevValue.current = value;
  //   console.log('prevValue: ', prevValue);
  // }, [value]);

  const focus = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=' rounded border border-black p-1'
        placeholder='type here...'
      />
      <div>value: {value}</div>
      <div>renderCount_useEffect: {renderCount}</div>
      <div>renderCount_useRef: {refRenderCount.current}</div>
      <button className='btn' onClick={focus}>
        Input Focus
      </button>
      <div>
        value: {value}
        <br />
        prevValue: {prevValue.current}
      </div>
    </>
  );
}