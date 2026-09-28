import React, { useRef, useState } from 'react'

const Ref2 = () => {

    const [count, setCount] = useState(0);

    const countRef = useRef(0);

    let changeState = () => {
        setCount(count + 1);
    }

    let changeRef = () => {
        countRef.current = countRef.current+1;
        console.log(countRef.current);
        
    }

  return (
    <div>

        <h2>Count: {count}</h2>

        <h2>Ref: {countRef.current}</h2>

        <button onClick={changeState}>Change State</button>

        <button onClick={changeRef}>Change Ref</button>

    </div>
  )
}

export default Ref2