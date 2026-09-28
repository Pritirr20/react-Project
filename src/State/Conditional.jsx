import React, { useState } from "react";

const Conditional = () => {
  let [show, setShow] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <div>
          <h1> Hello React !!! </h1>
          <h2>Hello</h2>
        </div>
      )}
    </div>
  );
};

export default Conditional;
