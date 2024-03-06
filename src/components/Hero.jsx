import Image from "next/image";

function Hero() {
  return (
    <div className="hero min-h-screen   flex justify-center items-center">
      <div className="hero-content h-screen max-w-screen-lg mx-auto flex flex-col  items-center  justify-center lg:flex-row-reverse">
        <Image alt="Hero-image" width={256} height={789} src="/wepik-1.png" className="mt-0 pt-0 w-32 lg:w-52" />
        <div className="text-center lg:text-left mb-14 lg:mb-0 mr-0 lg:mr-28">
          <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold">Mashiur Rahman</h1>
          <p className="py-6 text-gray-40">I have 3 years exp in Flutter in my previous company, TheCompanyName Inc. based on Surabaya, ID. I love practicing my skills and upscale for the real world users and share my knowledge to help each other.</p>
          <button
            className="hover:shadow-lg hover:shadow-gray-500 inline-flex items-center justify-center px-8 py-4 
                        text-base leading-6   rounded-md font-bold text-white bg-blue-500   transition duration-150 ease-in-out"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
