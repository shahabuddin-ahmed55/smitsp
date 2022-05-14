import React from 'react'

const navbar = {
    // diplay: "flex",
    backgroundColor: "DodgerBlue",
    flexDirection: "row",
    listStyle: "none"
}
export default function Navbar
() {
  return (
    <div style={navbar}>
       <h4> Navbar </h4>
           <li><a href="#">Login</a></li>
           <li><a href="#">Signup</a></li>
    </div>
  )
}
