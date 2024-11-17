
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Cart from "./Cart";
import ProductListComponent from "../../components/ProductListComponent";


const ProductList=()=>{
    return(

        <>
        {/* body  */}
    

       

        <div className="w-screen h-screen ">
{/* main container  */}
          <div className="w-full h-full flex flex-col ">

            <Navbar/>


            <Routes>
          {/* Define the route for Product List */}
          <Route path="/" element={<ProductListComponent />} />

          {/* Define the route for Cart */}
          <Route path="/cart" element={<Cart />} />
        </Routes>


          </div>


        </div>
    
      
        </>
    )

}

export default ProductList