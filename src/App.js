import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import RightNav from "./components/Nav/RightNav";
import Hero from "./components/Hero/Hero";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='App'>
      <Navbar open={open} setOpen={setOpen} />
      <RightNav open={open} setOpen={setOpen} />
      <Hero />
    </div>
  );
}

export default App;
