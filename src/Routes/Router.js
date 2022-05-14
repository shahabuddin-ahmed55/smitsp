import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../pages/welcome";
import Login from "../pages/admin/login"
import Signup from "../pages/admin/signup"


const PageRoutes = () => {
    <Routes>
        <Route path="/" element={< Welcome />}/>
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< Signup />} />
    </Routes>
}