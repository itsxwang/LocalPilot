import  { useState } from 'react'
import './middlebar.css'

function MiddleBar() {
  const [item, setItem] = useState<'Services' | 'Experiences' | 'Products'>("Services");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-center gap-4 md:gap-14 px-2">
        {/* Services */}
        <div onClick={() => setItem('Services')} className={` ${item === 'Services' ? 'selected' : 'item'} flex items-center min-w-[120px] rounded-full p-3 transition-ease-in-out transition duration-300`}>
          <div className="flex gap-1 mt-2 items-center group">
            <img
              src="./pan.png"
              alt=""
              className="w-8 h-8 md:w-13 md:h-15 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
            />
            <h1
              className={`${item === 'Services' ? 'text-blue-950' : 'text-gray-500 hover:text-blue-950'} 
                        text-[16px] md:text-[20px] font-[Inter] cursor-pointer`}
            >
              Services
            </h1>
          </div>
        </div>

        {/* Experiences */}
        <div onClick={() => setItem('Experiences')} className={`${item === 'Experiences' ? 'selected' : 'item'} flex items-center min-w-[120px] transition-ease-in-out transition duration-300 p-2.5 rounded-full`}>
          <div className="flex gap-1 mt-2 items-center group">
            <img
              src="./hot-air-balloo.png"
              alt=""
              className="w-7 h-7 md:w-10 md:h-9 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
            />
            <h1
              className={`${item === 'Experiences' ? 'text-blue-950' : 'text-gray-500 hover:text-blue-950'} 
                        text-[16px] md:text-[20px] font-[Inter] cursor-pointer`}
            >
              Experiences
            </h1>
          </div>
        </div>

        {/* Products */}
        <div onClick={() => setItem('Products')} className={`${item === 'Products' ? 'selected' : 'item'} flex items-center min-w-[120px] p-5 rounded-full transition-ease-in-out transition duration-300`}>
          <div className="flex gap-1 mt-2 items-center group">
            <img
              src="./cart2.png"
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
            />
            <h1
              className={`${item === 'Products' ? 'text-blue-950' : 'text-gray-500 hover:text-blue-950'} 
                        text-[16px] md:text-[20px] font-[Inter] cursor-pointer`}
            >
              Products
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleBar;
