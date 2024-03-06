import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container  mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full   lg:w-2/3 xl:w-1/2 mb-16 md:mb-0">
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-blue-500  mb-6">Contact With Me</h2>
              <h2 className="text-5xl font-bold text-gray-900  mb-8">Have an Project in Mind?</h2>
              <p className="text-xl font-medium text-gray-400">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 xl:w-1/2  ">
            <div className="p-4">
              <form>
                <div className="flex flex-1  flex-wrap justify-center  -mx-2">
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <div className="mb-6">
                      <input type="text" placeholder="Enter your name" className="w-full input-field bg-gray-100 px-5 py-3 rounded-sm transition-all  border-b-2 border-transparent   focus-within:border-blue-500   outline-none" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <div className="mb-6">
                      <input type="text" placeholder="Company (Optional)" className="w-full input-field bg-gray-100 px-5 py-3 rounded-sm transition-all  border-b-2 border-transparent   focus-within:border-blue-500   outline-none" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <div className="mb-6">
                      <input type="email" placeholder="Enter your email" className="w-full input-field bg-gray-100 px-5 py-3 rounded-sm transition-all  border-b-2 border-transparent   focus-within:border-blue-500   outline-none" />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mb-4">
                    <div className="mb-6">
                      <input type="text" placeholder="Phone number" className="w-full input-field bg-gray-100 px-5 py-3 rounded-sm transition-all  border-b-2 border-transparent   focus-within:border-blue-500   outline-none" />
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="mb-6">
                      <textarea rows="4" placeholder="Tell me about your project" className="w-full input-field bg-gray-100 px-5 py-3 rounded resize-none"></textarea>
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="text-center">
                      <button
                        type="submit"
                        className=" hover:shadow-lg hover:shadow-gray-500 inline-flex items-center justify-center px-8 py-4 
                        text-base leading-6   rounded-md font-bold text-white bg-blue-500   transition duration-150 ease-in-out"
                      >
                        Contact Me
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
