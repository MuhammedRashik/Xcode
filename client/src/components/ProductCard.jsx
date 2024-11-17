import { CiSearch } from "react-icons/ci"
import { IoMdHeartEmpty } from "react-icons/io"
import { PiShuffleAngularLight } from "react-icons/pi"

const ProductCard=()=>{
    return (
        <>
      {/* Card */}
<div className="w-72 h-[480px] rounded-md bg-white shadow-md p-4 group relative">
  <div className="w-full h-full flex flex-col">
    {/* Card Header */}
    <div className="relative w-full h-1/2 bg-yellow-100">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/f7/ec/d6/f7ecd623c5ae7161a9b1fd6892b821bb.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-md"
      />

      {/* Discount Badge */}
      <div className="absolute top-4 left-4 flex items-center justify-center w-16 h-16 bg-[#4E2B6F] text-white text-sm rounded-full shadow-md">
        -20%
      </div>

      {/* Vertical Rectangle (Hidden by Default) */}
      <div className="absolute top-1/4 right-4 w-12 h-1/2 bg-white rounded-lg shadow-md flex flex-col hidden group-hover:flex">
        {/* Row 1 */}
        <div className="flex-1 rounded-t-lg flex items-center justify-center">
          <PiShuffleAngularLight color="#64748b" size={20} />
        </div>
        {/* Row 2 */}
        <div className="flex-1 flex items-center justify-center">
          <CiSearch color="#64748b" size={20} />
        </div>
        {/* Row 3 */}
        <div className="flex-1 rounded-b-lg flex items-center justify-center">
          <IoMdHeartEmpty color="#64748b" size={20} />
        </div>
      </div>
    </div>

  {/* Card Footer */}
<div className="w-full h-1/2  p-4 flex flex-col justify-between">
  {/* Row 1: Product Name */}
  <div className="text-xl font-semibold text-gray-800">
    Product Name
  </div>

  {/* Row 2: Brand Name */}
  <div className="text-lg text-gray-400">
    Brand Name
  </div>

  <div className="flex items-center gap-1">
  {/* Display 5 stars */}
  {Array(5)
    .fill(0)
    .map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF" 
        viewBox="0 0 24 24"
        stroke="#D1D5DB" 
        strokeWidth={2}
        className="w-4 h-4 "
      >
        <path d="M12 .587l3.668 7.513 8.332 1.209-6.043 5.897 1.427 8.294-7.384-3.886L4.616 23.5l1.427-8.294L0 9.309l8.332-1.209L12 .587z" />
      </svg>
    ))}
</div>

  {/* Row 4: Original and Discounted Price */}
  <div className="flex items-center space-x-2">
    <span className="text-sm text-gray-400 line-through">
      $100
    </span>
    <span className="text-lg font-bold text-[#4E2B6F]">
      $80
    </span>
  </div>

  {/* Row 5: Add to Cart Button */}
  <button className="mt-2 w-full h-14 py-2 bg-[#4E2B6F] text-[#CCA775] text-sm font-semibold rounded-md shadow-md hover:bg-[#5c2e87]">
    Add to Cart
  </button>
</div>

  </div>
</div>

{/* card */}  
        
        </>
    )
}

export default ProductCard