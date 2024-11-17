import { useState } from "react";

const Filter=()=>{

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
  
    const min = 0;
    const max = 10000;
  
    const calculateThumbPosition = (value) => ((value - min) / (max - min)) * 100;
  
    const handleMinChange = (event) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value)) {
        setMinPrice(Math.min(value, maxPrice - 500));
      }
    };
  
    const handleMaxChange = (event) => {
      const value = parseInt(event.target.value, 10);
      if (!isNaN(value)) {
        setMaxPrice(Math.max(value, minPrice + 200));
      }
    };
    
    return (
        <>
        <div className="w-4/12 h-full  p-3"> 
        <div className="rounded-md bg-white shadow-sm  w-full h-full flex flex-col pt-10 pl-4 ">

<h1 className="text-black font-bold  text-lg font-sans tracking-wider">Product Categories</h1>

<div className="w-full b  flex flex-col pt-5 gap-5 text-gray-400 text-lg">
<p>Extention</p>
<p>Mobile Phone Cases</p>
<p>Power Banks</p>
<p>Headsets</p>
<p>Charger And Data Cable</p>

<hr class="border-t border-gray-300  mr-5 mt-5 " />
</div>

<div className="w-full  h-full flex flex-col pt-10 gap-4 ">
<div>
<h1 className="text-black font-bold  text-lg font-sans tracking-wide">Filter By Price</h1>
</div>
<div className="w-full h-16  items-center flex justify-evenly">
  
  <div className="w-5/12 h-10 border  border-gray-300 rounded-md flex justify-center items-center text-gray-400">
  399
  </div>
  <div className="w-5/12 h-10 border  border-gray-300 rounded-md flex items-center justify-center text-gray-400">
  11100
  </div>

</div>
<div className="w-full h-10 flex justify-center items-center p-6">
      <div className="relative max-w-xl w-full">
        <div className="relative z-10">
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={minPrice}
            onChange={handleMinChange}
            className="absolute pointer-events-auto appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" // Changed opacity-0 to opacity-100
          />
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute pointer-events-auto appearance-none z-20 h-2 w-full opacity-0 cursor-pointer" // Changed opacity-0 to opacity-100
          />
          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-[#4E2B6F] border"
              style={{
                left: `${calculateThumbPosition(minPrice)}%`,
                right: `${100 - calculateThumbPosition(maxPrice)}%`,
              }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-white rounded-full -mt-2 border border-[#4E2B6F] shadow-sm"
              style={{ left: `${calculateThumbPosition(minPrice)}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-white border border-[#4E2B6F] shadow-sm rounded-full -mt-2"
              style={{ right: `${100 - calculateThumbPosition(maxPrice)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
<div className="w-full h-16  items-center flex justify-evenly">
  
  <div className="w-5/12 h-10 border  border-gray-300 rounded-md flex justify-center items-center text-gray-400">
  Reset
  </div>
  <div className="w-5/12 h-10 border bg-[#4E2B6F]  border-gray-300 rounded-md flex items-center justify-center text-white">
  Apply
  </div>

</div>


</div>


        </div>
        
        </div>
        
        </>
    )
}



export default Filter