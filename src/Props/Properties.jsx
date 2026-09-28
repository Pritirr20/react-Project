import React from 'react'

const Properties = (props) => {    

  console.log(props);

  return (
    <div>
        
        <h1>{props.text}</h1>

        <h2>{props.number}</h2>
        
        {/* <h2>{props.object.address}</h2> */}

    </div>
  )
}

export default Properties