import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Register/>}/>
            </Route>
        </Routes>
    )
}