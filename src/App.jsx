import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/navBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
