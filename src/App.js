import React from "react";
import Welcome from "./pages/welcome";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./pages/admin/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Welcome />}/>
          <Route  path="/signup" element={<Signup />}/>
           </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
