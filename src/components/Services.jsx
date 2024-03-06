import React from "react";
import { MdPersonSearch } from "react-icons/md";
import { RxDragHandleDots1 } from "react-icons/rx";
import { PiDotsNineLight } from "react-icons/pi";
import { PiDotsSixThin } from "react-icons/pi";
import { GiExplosiveMaterials } from "react-icons/gi";
import { MdCropRotate } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";

export default function Services() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 bg-white">
      <div className="container  mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full   lg:w-2/3 xl:w-1/2 mb-16 md:mb-0">
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-blue-500  mb-6">What I Offer?</h2>
              <h2 className="text-5xl font-bold text-gray-900  mb-8">My Services</h2>
              <p className="text-xl font-medium text-gray-400">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className="w-full xl:w-2/3   ">
            <div className="p-4">
              <div className=" flex flex-auto    flex-wrap  justify-between  -mx-2">
                <div className="group relative w-full sm:w-1/2  px-4  mb-8">
                  <div className=" relative text-center  bg-white  group-hover:bg-blue-500 transition-all rounded-lg shadow-lg p-8  mb-8 md:mb-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-blue-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center">
                        <SiRoamresearch className="h-12 w-12 text-white group-hover:text-blue-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold  text-gray-900 group-hover:text-white  mb-3 md:text-2xl">User Research 1</h3>
                    <p className="text-base font-normal text-gray-600 group-hover:text-white  mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                  </div>

                  <span className="absolute top-0 right-0   z-50 hidden group-hover:block">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                    </svg>
                  </span>
                  <span className="absolute bottom-[-8px] left-3  ">
                    {/* <RxDragHandleDots1 className="h-20 w-16 text-white group-hover:text-white " /> */}
                    <PiDotsSixThin className="h-10 w-10 text-white group-hover:text-white " />
                    <PiDotsSixThin className="h-10 w-10 mt-[-16px] text-white group-hover:text-white " />
                  </span>
                  {/* </div> */}
                </div>
                <div className="group relative w-full sm:w-1/2  px-4  mb-8">
                  <div className=" relative text-center  bg-white  group-hover:bg-blue-500 transition-all rounded-lg shadow-lg p-8  mb-8 md:mb-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-blue-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center">
                        <GiExplosiveMaterials className="h-12 w-12 text-white group-hover:text-blue-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold  text-gray-900 group-hover:text-white  mb-3 md:text-2xl">Visual Design</h3>
                    <p className="text-base font-normal text-gray-600 group-hover:text-white  mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                  </div>

                  <span className="absolute top-0 right-0   z-50 hidden group-hover:block">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                    </svg>
                  </span>
                  <span className="absolute bottom-[-8px] left-3  ">
                    {/* <RxDragHandleDots1 className="h-20 w-16 text-white group-hover:text-white " /> */}
                    <PiDotsSixThin className="h-10 w-10 text-white group-hover:text-white " />
                    <PiDotsSixThin className="h-10 w-10 mt-[-16px] text-white group-hover:text-white " />
                  </span>
                  {/* </div> */}
                </div>
                <div className="group relative w-full sm:w-1/2  px-4  mb-8">
                  <div className=" relative text-center  bg-white  group-hover:bg-blue-500 transition-all rounded-lg shadow-lg p-8  mb-8 md:mb-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-blue-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center">
                        <GiMaterialsScience className="h-12 w-12 text-white group-hover:text-blue-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold  text-gray-900 group-hover:text-white  mb-3 md:text-2xl">App Development</h3>
                    <p className="text-base font-normal text-gray-600 group-hover:text-white  mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                  </div>

                  <span className="absolute top-0 right-0   z-50 hidden group-hover:block">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                    </svg>
                  </span>
                  <span className="absolute bottom-[-8px] left-3  ">
                    {/* <RxDragHandleDots1 className="h-20 w-16 text-white group-hover:text-white " /> */}
                    <PiDotsSixThin className="h-10 w-10 text-white group-hover:text-white " />
                    <PiDotsSixThin className="h-10 w-10 mt-[-16px] text-white group-hover:text-white " />
                  </span>
                  {/* </div> */}
                </div>
                <div className="group relative w-full sm:w-1/2  px-4  mb-8">
                  <div className=" relative text-center  bg-white  group-hover:bg-blue-500 transition-all rounded-lg shadow-lg p-8  mb-8 md:mb-0">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-blue-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center">
                        <MdCropRotate className="h-12 w-12 text-white group-hover:text-blue-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold  text-gray-900 group-hover:text-white  mb-3 md:text-2xl">User Research 1</h3>
                    <p className="text-base font-normal text-gray-600 group-hover:text-white  mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
                  </div>

                  <span className="absolute top-0 right-0   z-50 hidden group-hover:block">
                    <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                      <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                    </svg>
                  </span>
                  <span className="absolute bottom-[-8px] left-3  ">
                    {/* <RxDragHandleDots1 className="h-20 w-16 text-white group-hover:text-white " /> */}
                    <PiDotsSixThin className="h-10 w-10 text-white group-hover:text-white " />
                    <PiDotsSixThin className="h-10 w-10 mt-[-16px] text-white group-hover:text-white " />
                  </span>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
