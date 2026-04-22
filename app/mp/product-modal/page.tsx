import Image from "next/image";
import Headphone from "../../../public/headphone.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {/* card container */}
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* image container */}
        <div>
          <Image
            src={Headphone}
            alt="headphone"
            className="mx-auto duration-200 w-60 hover:scale-105"
          />
        </div>
        {/* content */}
        <div className="flex flex-col space-y-6">
          {/* label and decription */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm rounded-full text-white bg-black">
                free shipping
              </div>
            </div>
            <div className="max-w-sm text-2xl font-medium text-black">
              Experience crystal clear sound with our premium wireless
            </div>
            {/* price */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through text-black">$299</p>
              <p className="text-5xl font-bold text-black">$99</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until the end of the month.
              </p>
            </div>
            {/* buttons */}
            <div className="group">
              <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8  border-blue-700 rounded-lg group-hover:borrder-t-8 group-hover:bg-blue-700 group-hover:border-b-0 ghoup-hover:border-t-blue-700 ghoup-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounfded-lg group-hover:bg-blue-700">
                  Add to Cart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
