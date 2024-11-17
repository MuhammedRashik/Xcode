import { IoMenu } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { LuGrip } from "react-icons/lu";
import ProductCard from "./ProductCard";


const ProductListBody=()=>{
    return (
<>
<div className="w-8/12  h-full  flex flex-col">
{/* first session  */}
<div className="w-full  h-28 flex flex-col md:flex-row">


<div className=" w-5/12 flex justify-start items-center ">

<h1 className="text-3xl font-sans font-semibold">Mobile Accessories</h1>
</div>
<div className=" w-7/12 flex justify-around ">
<div className="w-5/12  flex items-center gap-2">
 
 <p className="">Show :</p>
 <p className="text-gray-400">9 /</p>
 <p className="text-gray-400">12 /</p>
 <p className="text-gray-400">18 /</p>
 <p className="text-gray-400">24 </p>



</div>
<div className="w-3/12  flex gap-2 items-center">

<IoMenu color="grey" size={30}/>
<CgMenuGridO color="grey" size={30}/>
<LuGrip color="grey" size={30} />
</div>
<div className="w-5/12  flex items-center ">
<select className="border border-gray-400 w-full rounded-md h-10 bg-white text-gray-400 text-sm outline-none">
  <option value="option1" className="text-xs"><p className="text-xs text-gray-400">Sort by popularity</p></option>
  <option value="option2" className="text-xs">Option 2</option>
  <option value="option3" className="text-xs">Option 3</option>
</select>
</div>


</div>


 </div>
{/* first session  */}

{/* second ssession */}
<div className="w-full h-full overflow-x-auto">
  <div className="flex space-x-4 p-4 pt-6">
    {/* Map over ProductCard */}
    {Array(10)
      .fill(0) // Replace with your product data
      .map((_, index) => (
        <div key={index} className="flex-shrink-0">
          <ProductCard />
        </div>
      ))}
  </div>
</div>

 
</div>
</>
    )
}

export default ProductListBody