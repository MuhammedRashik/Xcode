import { Route, Routes } from "react-router-dom"
import ProductList from "../pages/user/ProductList"
import Cart from "../pages/user/Cart"

const UserRouter=()=>{
    return (
<>

<Routes>

<Route path="/" element={<ProductList />} />
<Route path="/cart" element={<Cart />} />

</Routes>

</>
    )
}

export default UserRouter