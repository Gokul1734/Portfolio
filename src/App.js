// import { Button } from "reactstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import ProjectD from "./components/Project_Display/projectDisplay";
import Contacts from "./components/Contacts/contacts";
// import { BrowserRouter as Route, Routes } from "react-router-dom";
// import Chat from "./components/Chat/Chat";
// import API from "./components/API";
// import Project from "./components/Project.js";



function App() {
 let screenwidth = window.screen.width;
 let screenheight = window.screen.height;
  return (
    <div id="framebig"  className="App">
      <div className=" bg-black h-full">
        <Header />
        <Hero />
        <div className="h-full w-screen ">
          <ProjectD />
        </div>
        <br />
        <Contacts />
        {/* <Routes>
          <Route path="/chat" element={Chat} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
