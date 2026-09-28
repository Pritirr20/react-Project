import React, { useState } from 'react'

const Type = () => {

    const [user, setUser] = useState({
        name: "Raj",
        age: 20,
        address: "Pune"
    })

    const [students, setStudents] = useState([
        "Amit", "Rahul", "Jay"
    ])

    let updateAge = () => {
        setUser({...user, age: 30 });
    }

  return (
    <div>

        {students.map((cEle, cInd) => {
            return (
                <div>
                    <h2>{cEle}</h2>
                </div>
            )
        })}

        <button onClick={() => {setStudents([...students, "Neha", "Sanika"])}}>Add Student</button>

        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.address}</h1>

        <button onClick={updateAge}>Update</button>

    </div>
  )
}

export default Type