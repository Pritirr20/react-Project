import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const APICall = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");

        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);

        // const data = await response.json();

        setUsers(response.data);
      }
      catch(error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
        
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const newUser = {
      name : name,
      userName : username,
      email : email
    }

    try {
      const response = await axios.delete("https://jsonplaceholder.typicode.com/users/1");
      console.log(response.data);

      alert("User added successfully!");
      
    }
    catch(error) {
      console.log(error);
      
    }

    }

    if(loading) {
      return <h1>Loading...</h1>
    }

    if(error) {
      return <h2>{error}</h2>
    }
    
  return (
    <div>

        <h1>Users</h1>

        <form action="" onSubmit={handleSubmit}>

          <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />

          <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <button type='submit'>
            Add User
          </button>

        </form>

        {users.map((ele) => {
           return (
           <div style={{display:'flex'}} key={ele.id}>
                <h2>{ele.name}</h2>
                <h3>{ele.username}</h3>
                {/* <img src={ele.image} alt="" height={150} /> */}

                <h1>{ele.email}</h1>

              {/* <Link to={`/product/${ele.id}`}>
                <button>View Details</button>
              </Link> */}

           </div>
           )
        })}

    </div>
  )
}

export default APICall