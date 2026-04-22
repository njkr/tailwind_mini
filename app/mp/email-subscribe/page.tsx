import Image from "next/image";
import SuscribeImage from "../../../public/image.jpg";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      {/* card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* flex container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <Image
            src={SuscribeImage}
            alt="subscribe"
            className="object-fit rounded-xl w-90  md:w-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-300 ease-in-out"
          />
          <div className="p-4 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs m-1 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat healthy and stay fit with our expert tips delivered straight
              to your inbox.
            </p>
            <div className="flex flex-col mt-5 space-y-4md:space-x-3 md:space-y-0 md:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 p-2 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs md:text-left placeholder:md:text-left"
              />
              <button className="md:mt-0 mt-2 px-5 py-3 text-xs rounded-md text-zync-800 bg-lime-500 hover:bg-lime-700 hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
