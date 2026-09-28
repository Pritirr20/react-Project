import React, { useRef } from 'react'

const Ref1 = () => {

    const reference = useRef();

    function input() {
        console.log(reference.current.value);
        reference.current.focus();

        console.log(document.getElementById("inp").value);
        
    }

  return (
    <div>

    <input ref={reference} type="text" name="" id="inp" placeholder='Enter your name'/>

    <button onClick={input}>Submit</button>

    </div>
  )
}

export default Ref1