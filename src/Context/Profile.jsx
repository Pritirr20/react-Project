import React, { useContext } from 'react'
import UserContext from './UserContext'

const Profile = () => {

    const name = useContext(UserContext);

  return (
    <div>

        <h2>Hello, {name}</h2>

    </div>
  )
}

export default Profile