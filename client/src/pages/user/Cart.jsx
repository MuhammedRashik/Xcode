import { FaArrowLeft } from "react-icons/fa6";
import CartCard from "../../components/CartCard";

const Cart = () => {
    return (
        <>
            {/* body */}
            <div className="w-screen h-screen overflow-hidden">
                {/* main container */}
                <div className="w-full h-full flex flex-col overflow-hidden">
                    <div className="w-full h-36 p-6 pl-8 pr-8 flex justify-center items-center">
                        <div className="w-11/12 h-full border border-gray-400 rounded-md flex items-center justify-between pl-5">
                            {/* Button to go to the previous page */}
                            <button 
                                className="p-2 bg-[#4E2B6F] text-white rounded-full flex items-center justify-center"
                            >
                                <FaArrowLeft color="#CCA775" size={20} />
                            </button>

                            {/* Cart item count */}
                            <div className="text-center text-lg font-semibold">
                                Items in Cart (3)
                            </div>

                            {/* Spacer to balance the layout */}
                            <div className="w-16"></div>
                        </div>
                    </div>

                    <div className="flex w-full h-full overflow-hidden">
                        {/* cart items */}
                        <div className="h-full w-8/12 p-6 overflow-y-auto flex flex-col gap-5" style={{ maxHeight: 'calc(100vh - 216px)' }}>
    <CartCard className="mb-4" />
    <CartCard className="mb-4" />
    <CartCard className="mb-4" />
    <CartCard className="mb-4" />
    <CartCard className="mb-4" />
</div>

                        {/* Sidebar or additional content (adjusted width and overflow management) */}
                        <div className="w-3/12 h-full flex flex-col justify-between  p-4">
                            {/* Row 1: Payment Details Card */}
                            <div className="p-3 bg-white rounded-md shadow-md mb-4 border border-gray-300">
                                {/* Header Part */}
                                <div className="flex items-center justify-center mb-4">
                                    <h3 className="text-lg font-semibold border-b w-full border-gray-400 pb-2">Payment Details</h3>
                                </div>

                                {/* Body Content */}
                                <div className="space-y-3">
                                    {/* Price (3 items) */}
                                    <div className="flex justify-between text-sm text-gray-700">
                                        <span>Price (3 items)</span>
                                        <span>₹300</span>
                                    </div>

                                    {/* Discount */}
                                    <div className="flex justify-between text-sm text-gray-700">
                                        <span>Discount</span>
                                        <span className="text-red-500">-₹20</span>
                                    </div>

                                    {/* Delivery Charges */}
                                    <div className="flex justify-between text-sm text-gray-700">
                                        <span>Delivery Charges</span>
                                        <span className="text-green-500">Free</span>
                                    </div>

                                    {/* Dotted Line */}
                                    <div className="border-t-2 border-dotted my-3"></div>

                                    {/* Total Amount */}
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total Amount</span>
                                        <span>₹102</span>
                                    </div>

                                    {/* Dotted Line */}
                                    <div className="border-t-2 border-dotted my-3"></div>

                                    {/* You Saved */}
                                    <div className="flex justify-between text-sm text-gray-700">
                                        <span>You Saved</span>
                                        <span className="text-green-500">₹120</span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Total Price and Proceed Button
                            <div className="p-3 bg-white rounded-md shadow-lg mb-4 border border-gray-400">
                                <div className="flex justify-between items-center">
                                    <div className="text-xl font-bold">₹111</div>
                                    <button className="p-2 bg-[#4E2B6F] text-white rounded-md">Proceed</button>
                                </div>
                            </div> */}

                            {/* Row 3: Address Details */}
                            <div className="p-3 bg-white rounded-md shadow-md border border-gray-300 mb-4">
                                <h3 className="text-lg font-semibold">Address Details</h3>
                                <p className="text-sm text-gray-500 mb-4"></p>

                                {/* Delivery to (Title) */}
                                <div className="text-sm font-medium mb-2">Delivery to:</div>

                                {/* Name and Pincode */}
                                <div className="flex justify-between mb-3">
                                    <div className="flex flex-col w-6/12">
                                        <span className="text-sm font-medium">John Doe</span> {/* Name */}
                                    </div>
                                    <div className="flex flex-col w-5/12">
                                        <span className="text-sm font-medium">110001</span> {/* Pincode */}
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="mb-3">
                                    <span className="text-sm font-medium">Flat No. 123, Street Name, City, State</span> {/* Address */}
                                </div>

                                {/* Phone Number */}
                                <div className="mb-3">
                                    <span className="text-sm font-medium">+91 1234567890</span> {/* Phone Number */}
                                </div>

                                {/* Add or Change Address Button */}
                               
                            </div>

                            {/* Row 4: Place Order Button */}
                            <div className="p-3 bg-white rounded-md shadow-lg">
                                <button className="w-full p-3 bg-[#4E2B6F] text-white rounded-md">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
