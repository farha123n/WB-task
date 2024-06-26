import Logo from "./Logo";
import { MdCardGiftcard, MdOutlineAccountBox } from "react-icons/md";
import { FaSearch, FaBolt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import './App.css';
import { useEffect, useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { BsMinecartLoaded } from "react-icons/bs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
      setOpen(!open);
  }
 
const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 40) {
        console.log(window.scrollY);
           console.log("hello");
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div>
            <div className="bg-[#081621]  fixed top-0 lg:static  h-24  z-[20] flex items-center justify-between p-6 m-0">
                <div className="flex left-0 right-0  justify-center items-center h-28 lg:h-16 lg:order-3 lg:static fixed  bottom-0 bg-[#081621] ">
                    <div className=" lg:flex mx-1  ">
                        <div className="pt-3 text-3xl px-2 text-white lg:text-[#ef4a23] mx-1">
                            <MdCardGiftcard />
                        </div>
                        <div>
                            <p className="text-lg text-white">
                                Offers
                            </p>
                            <p className="text-lg text-gray-500">
                                Latest offers
                            </p>
                        </div>
                    </div>
                    <div className=" lg:flex mx-1">
                        <div className="pt-3 text-3xl text-white  px-2 animate-color-toggle mx-1">
                        <FaBolt />
                        </div>
                        <div className="m-0 p-0">
                            <p className="text-lg text-white">
                                Eid salami
                            </p>
                            <p className="text-lg text-gray-500">
                                Special deals
                            </p>
                        </div>
                    </div>
                    <div className="z-50  mx-1 lg:p-0 bg-[#081621]  lg:fixed lg:bottom-32 lg:right-6">
                        <div className="pt-3 text-2xl text-white bg-[#081621]    px-2  mx-1">
                        <FaSquarePlus />
                        </div>
                        <div className="m-0 p-0 ">
                            <p className="text-sm text-white mb-12 lg:mb-0 bg-[#081621]">
                                compare
                            </p>
                           
                        </div>
                      <div className="hidden lg:block lg:relative left-12 bottom-16 bg-[#ef4a23] w-5 h-5 text-center rounded-full">0</div>  
                    </div>
                    <div className=" lg:flex mx-1">
                        <div className="pt-3 text-3xl px-2 text-white lg:text-[#ef4a23] mx-1">
                            <MdOutlineAccountBox />
                        </div>
                        <div>
                            <p className="text-lg text-white">
                                Account
                            </p>
                            <p className="text-lg text-gray-500">
                                Register or Login
                            </p>
                        </div>
                    </div>
                 
                </div>
                <div className="lg:hidden text-2xl ">
                        <span onClick={toggle} className="text-white">
                            {open ? <RxCross1 /> : <IoMdMenu />}
                        </span>
                    </div>
                <div className="lg:order-1 ml-20 lg:ml-5">
                    <Logo />
                </div>
                <div className="flex lg:relative lg:order-2">
                    <input className="flex-1 h-12 pl-5 rounded-lg hidden lg:flex lg:w-[600px] border-solid border-[rgb(192,192,192)] border-2" type="text" placeholder="SEARCH" />
                    <span className="lg:text-[#081621] text-3xl ml-28 lg:pt-2 lg:absolute lg:right-6 text-white">
                        <FaSearch />
                    </span>
                </div>
                <div className="  pt-3 mx-1 lg:p-0 bg-[#081621] z-50  lg:fixed lg:bottom-8 lg:right-6">
                        <div className=" text-2xl text-white bg-[#081621]    px-2  mx-1">
                        <BsMinecartLoaded />
                        </div>
                        <div className="m-0 p-0 ">
                            <p className="text-sm text-white text-center  lg:mb-0 bg-[#081621]">
                                cart
                            </p>
                           
                        </div>
                      <div className="hidden lg:block lg:relative left-10 bottom-12 bg-[#ef4a23] w-5 h-5 text-center rounded-full">0</div>  
                    </div>
                <button className="hidden text-white lg:block p-3 text-lg rounded-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-red-500 animate-gradient-x lg:order-4">PC Builder</button>
            </div>
            <ul className={`bg-white w-full ${isFixed ? 'fixed lg:top-0 top-20 mb-0' : ''} p-4  lg:flex shadow-2xl ${open ? 'block' : 'hidden'} z-40 overflow-visible`}>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Desktop</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Laptop</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Component</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Monitor</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">UPS</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Phone</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Tablet</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Office Equipment</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Camera</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Security</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Networking</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Software</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Server & Storage</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Accessories</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Gadget</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">Gaming</li>
                <li className="text-sm text-[#081621] mx-3 font-bold hover:text-[#ef4a23]">TV</li>
                <li className="text-sm text-[#081621] mx-2 font-bold hover:text-[#ef4a23]">Appliance</li>
            </ul>
        </div>
    );
};

export default Navbar;
