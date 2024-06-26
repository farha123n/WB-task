
import { FaAppStore, FaFacebook, FaGooglePlay, FaSearch, FaYoutube } from "react-icons/fa";
import './App.css'
import { FaLaptop } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import './App.css';
import Navbar from './Navbar';

import { HiQuestionMarkCircle } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import Breakingnews from "./Breakingnews";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";


function App() {
 

  return (
    <div className='min-h-screen font-sans'>
      
          
      <Navbar></Navbar>
      <div className='mt-10 z-0'>
        <div className='lg:flex'>
          <div className='w-full lg:w-[3500px] mt-28 lg:mt-0 lg:mx-10 h-[350px]  lg:h-[600px]'>
            <img className='w-full h-full' src="https://www.startech.com.bd/image/cache/catalog/home/banner/offer-online-lenovo-laptop-discount-coupon-982x500.webp" alt=""  />
          </div>
          <div className='w-full  lg:mt-0 lg:h-[300px]'>
            <div className='bg-[#ffe8a1] w-full lg:w-5/6 h-[350px] lg:p-10 p-5 my-8 lg:my-0'>
              <p className='text-xl text-center font-bold mt-8 mb-4'>Compare Products</p>
              <p className='text-center text-[#666] text-lg my-4'>Choose two products to compare</p>
              <div className='flex items-center justify-center relative my-4'>
              <input className='p-2 text-lg w-full ' type="search" placeholder='Search and select product'/>
              <FaSearch className="absolute right-4 " />
              </div>
              <div className='flex items-center justify-center relative my-4'>
              <input className='p-2 text-lg w-full ' type="search" placeholder='Search and select product'/>
              <FaSearch className="absolute right-4 " />
              </div>
              <button className="w-full rounded-lg  p-2 border-[3px] text-[#3749bb] text-center  font-bold border-solid border-[#3749bb] hover:bg-[#3749bb] hover:text-white">
                View comparison
              </button>
            </div>
            <div className='w-full lg:w-5/6  lg:mt-10 lg:h-[340px]'>
              <img className="w-full lg:h-[210px]" src='https://www.startech.com.bd/image/cache/catalog/home/banner/notice/24-june-eid-notice-banner-982x500.webp'alt="" />
            </div>
          </div>
         
        </div>
      </div>
      <div className="my-20 grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-2">
         <div className="flex shadow-xl p-2">
          <div className="w-14 mt-2 h-14 text-center text-3xl rounded-full text-white bg-[#ef4a23] flex items-center justify-center">
          <FaLaptop /></div>
         <div className="mx-6 my-2">
          <p className="text-xl font-semibold">Laptop Finder</p>
          <p className="text-[#666] text-lg">Find your laptop easily</p>
         </div>
         </div>
         <div className="flex shadow-xl p-2">
          <div className="w-14 mt-2 h-14 text-center text-3xl rounded-full text-white bg-[#ef4a23] flex items-center justify-center">
          <FaMessage /></div>
         <div className="mx-6 my-1 mb-4">
          <p className="text-xl font-semibold">Raise a voice</p>
          <p className="text-[#666] text-lg">Find your laptop easily</p>
         </div>
         </div>
         <div className="flex shadow-xl p-2">
          <div className="w-14 mt-2 h-14 text-center text-3xl rounded-full text-white bg-[#ef4a23] flex items-center justify-center">
          <HiQuestionMarkCircle />
</div>
         <div className="mx-6 my-1">
          <p className="text-xl font-semibold">Online Support</p>
          <p className="text-[#666] text-lg">Get online support</p>
         </div>
         </div>
         <div className="flex shadow-xl p-2">
          <div className="w-14 mt-2 h-14 text-center text-3xl rounded-full text-white bg-[#ef4a23] flex items-center justify-center">
          <IoSettings /></div>
         <div className="mx-6 my-1">
          <p className="text-xl font-semibold">Laptop Finder</p>
          <p className="text-[#666] text-lg">Find your laptop easily</p>
         </div>
         </div>
       
      </div>
      <Breakingnews></Breakingnews>
      <div className="my-10 flex items-center justify-center">
        <div>
          <p className="text-2xl font-semibold my-2 text-center" >
            Featured category
          </p>
          <p className="text-xl  text-center">Get your desired product from category</p>
        </div>
      </div>
      <div className="my-8 grid grid-cols-4 lg:grid-cols-8 lg:mx-20">
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/ac-48x48.png" />
          <p className="text-xl my-6 text-center">AC</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png" />
          <p className="text-xl my-6 text-center">Drone</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png" />
          <p className="text-xl my-6 text-center">Gimbal</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/brand-logo/laptop-acc-icon-48x48.png" />
          <p className="text-xl my-6 text-center">Laptop</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png" />
          <p className="text-xl my-6 text-center">Laptop Accessories</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png" />
          <p className="text-xl my-6 text-center">TV</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-accessories-48x48.png" />
          <p className="text-xl my-6 text-center">Mobile Phone</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-accessories-48x48.png" />
          <p className="text-xl my-6 text-center">Mobile Accessories</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png" />
          <p className="text-xl my-6 text-center">Portable Power</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/vr-48x48.png" />
          <p className="text-xl my-6 text-center">VR Virtual Reality</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png" />
          <p className="text-xl my-6 text-center">Smart Watch</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png" />
          <p className="text-xl my-6 text-center">Action Camera</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png" />
          <p className="text-xl my-6 text-center">Headphone</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/earbuds-48x48.png" />
          <p className="text-xl my-6 text-center">Earbuds</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png" />
          <p className="text-xl my-6 text-center">Bluetooth Speakers</p>
          
        </div>
        <div className="w-16 shadow-lg hover:text-[#ef4a23]">
          <img className="w-full" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png" />
          <p className="text-xl my-6 text-center">Gaming Console</p>
          
        </div>
        
      </div>
      <div className="my-10 bg-gradient-to-r from-cyan-500 to-blue-500  p-10 lg:flex justify-between lg:mx-20 rounded-lg">
      <div className="lg:flex">
      <div className="text-white text-6xl">
        <FaLocationDot />
        </div>
        <div>
          <p className="text-3xl text-white font-bold">20 + physical stores</p>
          <p className="text-2xl font-bold text-white">Visit our store and get your desired product</p>
        </div>
      </div>
      <div className="relative">
        <input className="bg-[#ef9919] rounded-full p-6 pl-8 text-xl font-bold text-white" placeholder="Find our store" type="search" name="" id="" />
        <FaSearch className="absolute right-10 top-4 text-white text-4xl" />
      </div>
      </div>
      <div className="my-20 lg:mx-10">
        <p className="text-xl font-bold text-center my-4">Featured Product</p>
        <p className="text-lg text-center mb-10">Check and get your desired product</p>
        <div className="my-5 grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-200x200.png" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            OnePlus Nord N30 SE 5G Smartphone (4/128GB)
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
               15,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/intel-core-i3-12100-12th-gen-budget-desktop-pc-02-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
           Intel Core i3-12100 12th Gen Budget Desktop PC
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            26,499৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 3,501৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp251/pro-mp251-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            MSI PRO MP251 24.5" 100Hz FHD Monitor
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            17,800৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 700৳
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g255f/g255f-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            MSI G255F 25" 180Hz 1ms IPS FHD Gaming Monitor
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            26,500৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 1,000৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g274qpf-e2/g274qpf-e2-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            MSI G274QPF E2 27" 180Hz 1ms IPS WQHD Gaming Monitor
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            41,200৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 700৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-08-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Lenovo IdeaPad Slim 3 Ryzen 5 7520U 15.6" FHD Laptop 16GB DDR5 RAM 512GB SSD with 2
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            66,500৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 2,000৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-slim-3-15amn8/ideapad-slim-3-15amn8-08-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Lenovo IdeaPad Slim 3 Ryzen 7 7730U 14" FHD Laptop Fingerprint 16GB DDR4 RAM
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            79,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 4,000৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen RTX 4070 8GB Graphics 16" QHD+
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            375,000৳

            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Earn Point: 500

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/tablet-pc/lenovo/tab-m10-gen-3/tab-m10-gen-3-10-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Lenovo Tab M10 (3rd Gen) 4GB RAM 64GB Storage 10.1-Inch FHD Tablet LTE (Sim Supported)
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            32,000৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 1,500৳
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/server/hpe/proliant-ml30-gen10-plus/proliant-ml30-gen10-plus-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            HPE ProLiant ML30 Gen10 Plus Tower Server
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            205,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Earn Point: 450

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/brand-pc/dell/vostro-3910-mt/vostro-3910-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Dell Vostro 3910 MT Core i3 12th Gen Tower Brand PC
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            52,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Earn Point: 500

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/hp-aio/pro-240-g9/pro-240-g9-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            HP Pro 240 G9 Core i3 12th Gen All-in-One Desktop PC
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            74,500৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/sewing-machine/brother/jc14/jc14-01-200x200.jpg" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Brother JC14 Household Electric Sewing Machine
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            11,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Earn Point: 130

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/camera/mirriorless/canon/eos-r100/eos-r100-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Canon EOS R100 Mirrorless Camera with 18-45mm Lens
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            55,900৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 2,100৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/television/samsung/43cu7700/43cu7700-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Samsung 43CU7700 43" Crystal 4K UHD Smart LED TV
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            44,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 15,900৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/speaker/jbl/bar-2-1-deep-bass-mk2/bar-2-1-deep-bass-mk2-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            JBL Bar 2.1 Deep Bass MK2 2.1 Channel Soundbar with Wireless Subwoofer
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            37,500৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 500৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/hp-aio/pro-240-g9/pro-240-g9-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            HP Pro 240 G9 Core i3 12th Gen All-in-One Desktop PC
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            74,500৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-pro-max/natural-titanium/iphone-15-pro-max-natural-titanium-official-200x200.jpg" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            iPhone 15 Pro Max 256GB Natural Titanium (Singapore)
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            197,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 42,999৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/camera/action/dji/pocket-2-creator-combo/pocket-2-creator-combo-01-200x200.jpg" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            DJI Osmo Pocket 2 Creator Combo 3 Axis Gimbal Stabilizer Action Camera
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            40,000৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 12,000৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/drones/dji/mini-4-pro/mini-4-pro-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            DJI Mini 4 Pro Drone With Mini to the Max Combo
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            160,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/smart-watch/xiaomi/amazfit/balance/balance-07-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Amazfit Balance AMOLED Display Bluetooth Calling AI-Powered Fitness Smart Watch
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            25,400৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 5,099৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/gaming-console/asus/rog-ally-rc71l/rog-ally-rc71l-02-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Asus ROG Ally RC71L AMD Ryzen Z1 Extreme Handheld Gaming Console
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            79,990৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Gift: Asus ROG BP1501G 17" Laptop Gaming Backpack

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/printer/pantum/m6556nw/m6556nw-01-200x200.jpg" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Pantum M6556NW Mono Laser Printer With Network & Wi-fi 22 PPM
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            19,200৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">500৳ Discount on Checkout

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/scanner/epson/perfection-v39/perfection-v39-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Epson Perfection V39 II Photo and Document Flatbed Scanner
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            8,250৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/interactive-display/infocus/inf8610/inf8610-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            InFocus INF8610 86" 4K Interactive Touch Display
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            418,000৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Earn Point: 450

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/gaming-chair/msi/mag-ch120-i/mag-ch120-i-200x200.JPG" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            MSI MAG CH120 I Steel Base Gaming Chair Black
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
            25,000৳ 
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 3,000৳

            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/gaming-chair/xtrike-me/gc-905/gc-905-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Xtrike Me GC-905 Gaming Chair
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
               15,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/security-camera/dahua/ip-camera/imou-ranger-2/imou-ranger-2-200x200.jpg" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Dahua imou Ranger 2 IP Camera with 360 Degree Coverage (IPC-A22EP-L/IPC-A22EP-G)
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
               5,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-200x200.png" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            OnePlus Nord N30 SE 5G Smartphone (4/128GB)
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
               15,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">499৳ Discount on Checkout
            </div>
          </div>
          <div className="relative shadow-xl">
            <div className="flex justify-center items-center">
              <img src="https://www.startech.com.bd/image/cache/catalog/laptop-accessories/backpack/lenovo/ideapad-gaming-modern/ideapad-gaming-modern-01-200x200.webp" alt="" />
            </div>
            <p className="my-7 hover:text-[#ef4a23] hover:underline hover:underline-offset-1">
            Lenovo IdeaPad Gaming Modern Backpack for 16" Laptop
            </p>
            <p className="text-[#ef4a23] text-xl font-bold">
               2,999৳
            </p>
            <div className="absolute -top-3 bg-[#6e2594] rounded-r-xl text-white">Save: 301৳

            </div>
          </div>

        </div>
      </div>
      <div>
        <h1 className="text-2xl my-6 font-bold">Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh</h1>
        <p className="text-lg my-5">Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. There is hardly a home in Bangladesh without a tech product. This is where we come in.<span className="text-[#ef4a23]">Star Tech Ltd</span> . started as a Tech Product Shop in March 2007. We focus on giving the best customer service in Bangladesh, following our motto of “Customer Comes First.” This is why Star Tech is the most trusted computer shop in Bangladesh today, capturing the loyalty of a large customer base. After a long 16-year journey, Star Tech Ltd. was certified with the renowned "ISO 9001:2015 certification" as a recognition for the best Quality Control Management System. As an ISO-certified organization, Star Tech Ltd. is now up to the international standards that specify a Quality Management System (QMS). This Certification denotes that the organization strictly maintains all sorts of regulatory requirements to provide customers with products and services of a global standard.</p>
      </div>
       <h1 className="text-2xl my-6 font-bold">Best Laptop Shop in Bangladesh</h1>
       <p className="text-lg my-5"><span className="text-[#ef4a23]">Star Tech</span> is the most popular Laptop Brand Shop in BD. Star Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. As the best laptop shop in BD, a customer’s budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. Star Tech is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions based on your needs and budget - making Star Tech the most trusted laptop shop in Bangladesh. Star Tech lets you buy an official Apple MacBook Air or MacBook Pro from Apple Store in Bangladesh. Star Tech sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell,<span className="text-[#ef4a23]">Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, Infinix, Walton, Xiaomi MI</span> , Huawei, Chuwi, etc.</p>
       <h1 className="text-2xl my-6 font-bold">Best Desktop PC Shop In Bangladesh</h1>
       <p className="text-lg my-5">Star Tech has the most comprehensive array of Desktop PCs. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at Star Tech outlets, the best Desktop PC shop in Bangladesh, which are spread nationwide. Get your new iMac Desktop or Apple Mac Mini with an international warranty and servicing plan. You can always depend on the Star Tech PC shop experts to build the best desktop PC or computer with parts of your choice. Star Tech is Bangladesh's most reliable repair shop for PC, laptops, & other consumer electronics. Take your gaming or professional content creation to the next level with a large collection of high-end Gaming PC and Editing PC from Star Tech. You can build a complete personal computer with the best desktop PC parts picked by you with our PC Builder feature. The features let you pick PC parts to buy the best desktop PC anytime. Or, you can visit any Star Tech custom PC shop near you to build the best Desktop PC according to your taste, live, and in front of you.</p>
       <h1 className="text-2xl my-6 font-bold">Best Gaming PC Shop In Bangladesh</h1>
       <p className="text-lg my-5"> We at Star Tech love gaming. Therefore, we aim to provide a holistic gaming experience with our best gaming PC shop in Bangladesh, “Star Tech Rig House.” The Rig House is a specialized shop for PC builds with high-end PC components. Star Tech Rig House is highly decorated with the best gaming PC parts for customers to build online Gaming or editing PC. Our gaming PC shop in Bangladesh offers the broadest range of Gaming PC, Gaming Laptops, and <span className="text-[#ef4a23]"> Game Consoles</span> from XBOX & PlayStation. Star Tech’s largest Gaming PC shop consists of Gaming Motherboards, Liquid Coolers, Custom Water Cooling for PC, Gaming Casings, high-performance RAM Kits, Graphics Cards, etc. Our exceptional Gaming accessories cover Gaming Chairs, Gaming Sofas, RGB Mousepads, Gaming Headphones, Headphone Stands, RGB Gaming PC Light-Strips and many more. We have strategic partnerships with many world-renowned computer Gaming brands like Razer, PNY, ASRock, Asus, Zadak, GALAX, Noctua, Antec, Lian Li, CRYORIG, EKWB, Gamdias, KWG, XFX, etc. Our gaming concern extends to leading gaming brands, including A4Tech Bloody, SteelSeries, Logitech, Corsair, Redragon, Cooler Master, Fantech, DeepCool, Cougar, Gigabyte & Elgato products at our exclusive Gaming PC Shop.</p>
       <h1  className="text-2xl my-6 font-bold">Best Office Equipment Shop In Bangladesh</h1>
       <p className="text-lg my-5">Star Tech Ltd. is Bangladesh's most trusted Office Equipment Shop. For more than 16 years, we have been providing the best Office Solution. Take a quick drive to the nearest Star Tech retail center and furnish your home office, Start-up business desk, or corporate space with the best Office Equipment and office supplies. Find Laptops, Desktops, Antiviruses, CCTV & IP Cameras, Printers, Routers, Photocopiers, Attendance Machines, Scanners, Conference Systems, Server Equipment, etc for smooth office operation.</p>
       <h1 className="text-2xl my-6 font-bold">Largest Gadget Shop In Bangladesh</h1>
       <p className="text-lg my-5">We bring in the most sought gadgets at Star Tech. Only genuine and leading brands of Smart Watch, Earbuds, TV, Power Bank, and Mobile Phone Accessories are available at our Gadget Shop. We are also concerned for creative professionals for whom we bring exciting gadgets like Drones, Studio Equipment, DSLR Camera, Gimbals & Stream Decks from internationally reputed brands like DJI, Blackmagic, Corsair, Zhiyun, Gudsen, and Loupedeck. Star Tech has established the largest gadget shop in BD with the help of an app & E-commerce website. Ease up your chores with Daily Lifestyle gadgets from our gadget shop. Xiaomi, Anker, Micropack, Vention, Fire-Boltt, UGREEN, OnePlus, Apple, Baseus, Orico, Havit, Samsung, and HOCO are a few of the brands we cover.</p>
       <h1 className="text-2xl my-6 font-bold">Top Mobile Shop in Bangladesh</h1>
       <p className="text-lg my-5">Star Tech mobile phone shop offers the latest smartphones and feature phones from top mobile brands. Samsung, Motorola,<span  className="text-[#ef4a23]"> Google Pixel,</span> Vivo, Huawei, Xiaomi, OPPO, Mi, Realme, and OnePlus are among the Android smartphone brands at our mobile shop. Star Tech is a one-stop solution for buying iPhones in Bangladesh. Offering extensive warranty, EMI & home delivery service spanning the country, we are the top mobile shop in Bangladesh, presenting the best online shop for mobile phones. Our mobile phone shop has an extensive collection of mobile phone accessories, including chargers, USB Type C Cables, Power Banks, Wireless Chargers, and many more to go with your smartphone.</p>
       <h1 className="text-2xl my-6 font-bold">Trusted Online Shopping From Bangladesh at The Best E-Commerce Website</h1>
       <p className="text-lg my-5">Star Tech believes the most in customer satisfaction. To meet the surging demand for online shopping from Bangladesh, we launched our E-Commerce website. our highly trusted online shop has been regarded as one of the best E-Commerce websites with most visits. Star Tech is revolutionizing online shopping in Bangladesh, featuring a brilliant search engine that helps our valued customers find their desired products easily. We have developed the most comprehensive PC Builder App, also integrated into our online retail store. With the PC Builder, you can build your Custom PC for gaming or productivity, save the build, and get an estimated budget, wattage, and detailed performance report. Our E-Commerce platform runs a variety of campaigns and exciting deals on multiple national & international occasions. a few of our most successful events are - Mistery Box, Flash sale, Special offer, Thursday Thunder, Anniversary Special Offer, New Year Offer, 11.11, 12.12 Campaign, and many more. We also arrange special eSports Online Gaming Events and tournaments for Bangladeshi gamers in partnership with renowned gaming brands like Razer and Asus ROG.</p>
       <h1 className="text-2xl my-6 font-bold">Best Price, Product, After-sales Customer Service, & Fastest Delivery</h1>
       <p className="text-lg my-5">Star Tech Ltd. has taken care of its customers since the beginning. Whether a customer is purchasing or inquiring, our customers get the highest priority. We deliver the best product for the best price with extended after-sales support & the highest standard of customer service. We <span  className="text-[#ef4a23]">offer </span> your desired product within the fastest delivery timeframe. Covering all 64 districts of Bangladesh, our distribution hubs are located in Dhaka, Chattogram, Khulna, Rangpur, Gazipur, and Rajshahi. The plan to expand our operations in other cities is already in motion.</p>
       <div className="mt-14 bg-black mb-28 lg:mb-0 ">
        <div className="lg:flex justify-between lg:mx-10">
          <div className="mt-7">
            <h1 className="mb-6 text-3xl  justify-start text-gray-300">Support</h1>
            <div className="w-80 h-28 border-2 mx-4 rounded-full flex my-10">
            <BsFillTelephoneFill className="text-white text-2xl ml-6 mt-10" />
            <div className="w-[1px] h-24 my-2 bg-[#666] ml-10 "></div>
              <div className="p-2 mt-2">
                <p className="my-2 text-xl text-[#666]">10pm-7pm</p>
                <p className="my-2 text-[#ef4a23] text-3xl">16793</p>
              </div>
            </div>
            <div className="w-80 h-28 border-2 mx-4 rounded-full flex my-10">
            <FaLocationDot className="text-white text-2xl ml-6 mt-10" />
            <div className="w-[1px] h-24 my-2 bg-[#666] ml-10 "></div>
              <div className="p-2 mt-2">
                <p className="my-2 text-xl text-[#666]">Store locator</p>
                <p className="my-2 text-[#ef4a23] text-3xl">Find our store</p>
              </div>
            </div>
          </div>
          <div className="lg:mt-7 text-center">
          <div className="mb-6 text-xl  justify-start text-gray-300">About Us</div>
         <div className="lg:flex text-center  lg:justify-between">
         <div className="flex flex-row lg:flex-col">
            <p className="my-6 text-lg text-[#666]">EMI Terms</p>
            <p className="my-6 text-lg text-[#666]">Privacy policy</p>
            <p className="my-6 text-lg text-[#666]">start point policy</p>
            <p className="my-6 text-lg text-[#666]">brands</p>
          </div>
         <div className="mx-10 flex flex-row lg:flex-col">
            <p className="my-6 text-lg text-[#666]">About us</p>
            <p className="my-6 text-lg text-[#666]">Terms and condition</p>
            <p className="my-6 text-lg text-[#666]">Blogs</p>
            
          </div>
         <div className="flex flex-row lg:flex-col">
            <p className="my-6 text-lg text-[#666]"> Online Delivery</p>
            <p className="my-6 text-lg text-[#666]"> Refund and Return Policy</p>
            <p className="my-6 text-lg text-[#666]"> Contact Us</p>
          
          </div>
         </div>
          </div>
          <div className="lg:mt-7 text-center">
          <div className="mb-6 text-xl  justify-start text-gray-300">Stay connected</div>
          <p  className="my-6 text-l text-white">Star Tech Ltd</p>
          <p className="my-6 text-lg text-[#666]"> Head Office: 28 Kazi Nazrul Islam</p>
          <p className="my-6 text-lg text-[#666]">Ave,Navana Zohura Square, Dhaka 1000</p>
          <p className="my-6 text-lg text-[#666]">Email:</p>
          <p className="my-6 font-bold text-lg text-[#ef4a23]">webteam@startechbd.com</p>
          </div>
        </div>
        <div className="w-10/12 h-[1px] bg-[#666] my-12 mx-auto text-center"></div>
        <div className="flex justify-between mx-20">
          <div className="lg:flex">
          <p className="my-6 text-lg text-[#666]">Experience Star Tech App on your mobile:</p>
         <div className="flex">
         <div className="flex border-2 w-36 rounded-xl mx-4 ">
            <FaGooglePlay className="mt-4 text-white text-3xl" />
             <div>
             <p className="my-1 text-lg text-[#666]">download</p>
             <p className="my-1 text-lg text-white">Google Play</p>
             </div>

            </div>
            <div className="flex border-2 w-36 rounded-xl mx-4 ">
            <FaAppStore className="mt-4 text-white text-3xl" />
             <div>
             <p className="my-1 text-lg text-[#666]">download</p>
             <p className="my-1 text-lg text-white">App store</p>
             </div>

            </div>
         </div>

           
          </div>
          <div className="flex justify-center items-center">
          <div className="flex">
          <FaFacebook className="text-3xl text-white" />
          <FaYoutube className="text-3xl text-white" />
          <CiInstagram className="text-3xl text-white"  />
          </div>
          </div>
        </div>
        <div className="w-10/12 h-[1px] bg-[#666] my-12 mx-auto text-center"></div>
          <div className="hidden lg:flex mx-20 justify-between">
            <p className="my-1 text-lg text-[#666]">© 2024 Star Tech Ltd | All rights reserved</p>
            <p className="my-1 text-lg text-[#666]">Powered By: Star Tech</p>
          </div>
       </div>
    </div>
  )
}

export default App
