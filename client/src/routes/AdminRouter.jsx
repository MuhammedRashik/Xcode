import { Route, Routes } from "react-router-dom"
import AdminDashBoard from "../pages/admin/AdminDashboard"

const AdminRouter=()=>{
    return (
        <>
        <Routes>

<Route path="/" element={<AdminDashBoard />} />


</Routes>
        </>
    )
}

export default AdminRouter