import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import Dashboard from "../pages/Dashboard/Dashboard"
import Home from "../pages/Home/Home"
import ProtectedRoute from "./ProtectedRoute"


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/user" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;