import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/Nav/NavBar';


function App() {

  const [navButtons, setNavButtons] = useState([{navbutton:'Home',navlink:'#'},{navbutton:'About Us',navlink:'#about'},{navbutton:'ContactUs',navlink:'#contact'}])

  return (
    <div>
      <NavBar navProps={navButtons} />    
      <CreatePost />
    </div>
  );
}

export default App;
