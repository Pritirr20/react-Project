import React, { useEffect, useState } from 'react'

const Example1 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Side effects
        document.title = `Count : ${count}`;
        console.log("Component Rendering!!!", count);
        
    }, [count]);

  return (
    <div>

        <h1>Hello!!!</h1>

        <h2>{count}</h2>

        <button onClick={() => {setCount(count + 1)}}>Increase</button>

    </div>
  )
}

export default Example1