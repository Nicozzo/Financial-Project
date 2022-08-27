import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/hero";
import Analytics from "./components/analytics";
import Newsletter from "./components/newsletter";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
    </div>
  );
}

export default App;
