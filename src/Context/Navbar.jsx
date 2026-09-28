import React, { useContext } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

const Navbar = () => {

    // const user = useContext(UserContext);

    const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div>
        {/* <h2>Welcome, {user}</h2> */}

        <h2>Current theme: {theme}</h2>

        <button onClick={changeTheme}>Change theme</button>

    </div>
  )
}

export default Navbar