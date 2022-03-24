import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import NavBar from './Components/Nav/NavBar';


function App() {

  const [navButtons, setNavButtons] = useState([{navbutton:'Home',navlink:'#'},{navbutton:'About Us',navlink:'#about'},{navbutton:'ContactUs',navlink:'#contact'}])

  return (
    <div>
      <NavBar navProps={navButtons} />    
      <CreatePost />
      <DisplayPost />
    </div>
  );
}

export default App;
