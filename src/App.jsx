import React, { useState } from 'react'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Global from './Global'
import Heading3 from './Heading3'
import Props from './Props/Props'
import Properties from './Props/Properties'
import UsefulProps from './Props/UsefulProps'
import Increment from './State/Increment'
import Conditional from './State/Conditional'
import Type from './State/Type'
import Example1 from './useEffect/Example1'
import APICall from './useEffect/APICall'
import UserContext from './Context/UserContext'
import Navbar from './Context/Navbar'
import Profile from './Context/Profile'
import ThemeContext from './Context/ThemeContext'
import Ref1 from '../Ref/Ref1'
import Ref2 from '../Ref/Ref2'
import Home from './Routing/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Routing/About'
import Contact from './Routing/Contact'
import Nav from './Routing/Nav'
import PageNotFound from './Routing/PageNotFound'
import ProductDetails from './Routing/ProductDetails'
import Login from './Routing/Login'
import Form from './useEffect/Form'

const App = () => {

  const [theme, setTheme] = useState("light");

  let obj = {
    "address" : "Pune",
    "state" : "Maharashtra"
  }

  let displayMsg = () => {
    console.log("Hello, I am from display Msg function...");
  }

  const user = "Raj";

  function changeTheme() {
      setTheme(theme === "light" ? "dark" : "light");
  }

  return (

    // <BrowserRouter>

    // <Nav />

    //   <Routes>

    //     <Route path="/" element={<Home />} />

    //     <Route path="/about" element={<About />} />

    //     <Route path="/contact-page" element={<Contact />} />

    //     <Route path="/products" element={<APICall />} />

    //     <Route path="/product/:id" element={<ProductDetails />} />

    //     <Route path="*" element={<PageNotFound/>} />

    //     <Route path="/login" element={<Login/>} />

    //   </Routes>

    // </BrowserRouter>

    <div>
      
      <Heading1 />
      {/*<Heading2 />

      <Global />

      <Heading3 /> */

      /* <Props name="Rajesh" age={30} /> */

      /* <Properties text="HTML" />
      <Properties text="CSS" /> */
      /* <Properties text="Javascript" number={100} /> */

      /* <UsefulProps name="Ramesh" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ALbCD7zgXXZeWpOg4wRWVGUu5YQ0aE8g8La1tZOoTQ&s=10" age={40} address={obj} isMarried={true} msg={displayMsg} /> */

      /* <UsefulProps>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ALbCD7zgXXZeWpOg4wRWVGUu5YQ0aE8g8La1tZOoTQ&s=10" alt="" />

        <h1>Hello, This is usefulpros.</h1>

        <div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat obcaecati esse est maxime perferendis itaque. Molestiae culpa rem ut.</p>
          
        </div>

        <Heading1 />

      </UsefulProps> */

      /* <Increment /> */

      /* <Conditional /> */

      /* <Type /> */

      /* <Example1 />  */}

      {/* <APICall /> */}

      {/* /* <UserContext.Provider value={user}>

        <h1>My application</h1>

        <Navbar />
        <Profile />

      </UserContext.Provider> */ }

      {/* /* <ThemeContext.Provider value={{theme, changeTheme}}>

        <Navbar />

      </ThemeContext.Provider> */ }

      {/* /* <Ref1 /> */ }
      {/* /* <Ref2 /> */ }

       {/* <Home /> */}

       {/* <Form /> */}

     </div>
  )
}

export default App