import Filter from "./Filter"
import ProductListBody from "./ProductListBody"

const ProductListComponent=()=>{
    return (
        <>

{/* product list body  */}
<div className="w-full h-full bg-[#F6F6F6] flex sm:pl-10 sm:pr-7 pl-2 pr-2  "> 

<Filter/>
<ProductListBody/>

</div>
{/* product list body  */}


</>
    )
}

export default ProductListComponent