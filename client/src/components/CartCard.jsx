const CartCard=()=>{
    return (
        <>
        <div className="flex border border-gray-400 p-3  rounded-lg ml-16">
        {/* Image column */}
        <div className="w-1/4 bg-red-200 h-40">
            <img 
                src="https://i.pinimg.com/736x/f7/ec/d6/f7ecd623c5ae7161a9b1fd6892b821bb.jpg" 
                alt="Product Image" 
                className="w-full h-full object-cover rounded-md" 
            />
        </div>

        {/* Details column */}
        <div className="w-1/2 pl-6 flex flex-col justify-between">
            <div className="flex flex-col space-y-2 gap-3">
                {/* Product Name */}
                <div className="text-lg font-semibold">Product Name</div>

                {/* Brand Name */}
                <div className="text-md text-gray-600">Brand Name</div>

                {/* Price Section */}
                <div className="flex items-center space-x-4">
                    {/* Original Price */}
                    <div className="text-sm text-gray-500 line-through">₹1500</div>
                    {/* Discounted Price */}
                    <div className="text-xl font-semibold text-gray-500">₹1200</div>
                </div>

                {/* Delivery Estimate */}
                <div className="text-sm text-gray-500">Estimated Delivery: 5-7 Days</div>
            </div>
        </div>

        <div className="w-1/4 pl-6 flex flex-col space-y-4 gap-3">
            {/* Rating stars */}
            <div className="flex space-x-1">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
            </div>

            {/* Count button section */}
            <div className="flex items-center space-x-2 ">
                <button className="px-3 py-1 bg-gray-300 text-lg rounded-md">-</button>
                <div className="text-lg font-semibold">1</div>
                <button className="px-3 py-1 bg-gray-300 text-lg rounded-md">+</button>
            </div>

            {/* Save for Later button */}
            <button className="px-4 py-2 bg-[#4E2B6F] text-[#CCA775] rounded-md ">
                Delete
            </button>
        </div>
    </div>
        </>
    )
}

export default CartCard