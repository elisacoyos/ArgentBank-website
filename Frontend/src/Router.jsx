import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import Home from "./pages/Home/Home"


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/user" element={<Dashboard />} />

        </Routes>
        </BrowserRouter>
    )
}

export default Router;