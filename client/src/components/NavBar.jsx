import { RxDashboard } from "react-icons/rx";
import { PiUser, PiShuffleAngularLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {/* nav bar  */}
      <div className="w-full  h-20  bg-[#E6E3EE] sm:pl-7 sm:pr-7 pl-2 pr-2">
        <div className="w-full h-full flex ">
          {/* first session  */}
          <div className=" w-1/2 h-full  flex  ">
            <div className="w-5/12 flex justify-center items-center  pt-2 pb-2">
              <div className="bg-white rounded-full w-14 sm:w-11/12  h-full flex items-center p-1 ">
                {/* Icon Section */}
                <div className="w-16 h-full bg-[#4E2B6F] rounded-full flex justify-center items-center">
                  <RxDashboard color="#CCA775" size={25} />
                </div>
                {/* Text Section, Hidden on Small Screens */}
                <div className="w-full h-full  rounded-full justify-start pl-2 items-center font-sans sm:text-[5px] md:text-[6px] lg:text-[15px] hidden sm:flex">
                  All Categories
                </div>
              </div>
            </div>

            <div className="w-flex w-full h-full pl-5 flex items-center ">
              <div className="w-full h-full flex justify-start gap-5 items-center p">
                <p className="font-sans">Deals</p>
                <p className="font-sans">Shop</p>
                <p className="font-sans">Our Contacts</p>
                <p className="font-sans">Stores</p>
              </div>
            </div>
          </div>
          {/* first session  */}

          {/* second  session  */}
          <div className=" w-1/2 h-full  flex justify-end">
            <div className="w-3/4 h-full flex  pt-3 pb-3 justify-end gap-5 items-center">
              <div className="bg-white w-12 h-full rounded-full flex items-center justify-center  ">
                <PiUser color="black" size={30} />
              </div>
              <div className="bg-white w-12 h-full rounded-full flex items-center justify-center relative ">
                <div className="bg-white w-4 h-4 flex items-center justify-center text-black text-xs  rounded-full absolute -top-0.5 -right-2">
                  0
                </div>
                <PiShuffleAngularLight color="black" size={30} />
              </div>
              <div className="bg-white w-12 h-full rounded-full flex items-center justify-center relative">
                <div className="bg-white w-4 h-4 flex items-center justify-center text-black text-xs  rounded-full absolute -top-0.5 -right-2">
                  0
                </div>
                <IoMdHeartEmpty color="black" size={25} />
              </div>
              <div className=" flex h-full items-center">
                <div className="bg-[#4E2B6F] w-12 h-full rounded-full flex items-center justify-center relative">
                  <div className="bg-white w-4 h-4 flex items-center justify-center text-black text-xs  rounded-full absolute -top-0.5 -right-2">
                    0
                  </div>
                  <RiShoppingCartLine size={25} color="#CCA775" />
                </div>
                <div className="pl-1 text-[15px] ">₹0.00</div>
              </div>
            </div>
          </div>
          {/* second session  */}
        </div>
      </div>
      {/* nav bar  */}
    </>
  );
};

export default Navbar;
