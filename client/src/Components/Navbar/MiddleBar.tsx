import { useState } from 'react'

function MiddleBar() {
  const [item, setItem] = useState<'Services' | 'Experiences' | 'Products'>("Services");

  return (
    <div className="flex flex-col items-center">
      <div className="flex md:gap-14 gap-6">

        {/* Services */}
        <div onClick={() => setItem('Services')} className="flex gap-1 mt-2 items-center group">
          <img
            src="./ser-serv1.jpeg"
            alt=""
            className="w-13 h-15 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
          />
          <h1
            className={`${item === 'Services' ? 'text-blue-950' : 'text-gray-500'} 
                        text-[20px] font-[Inter] cursor-pointer`}
          >
            Services
          </h1>
        </div>

        {/* Experiences */}
        <div onClick={() => setItem('Experiences')} className="flex gap-1 mt-2 items-center group">
          <img
            src="./hot-air-balloo.png"
            alt=""
            className="w-10 h-9 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
          />
          <h1
            className={`${item === 'Experiences' ? 'text-blue-950' : 'text-gray-500'} 
                        text-[20px] font-[Inter] cursor-pointer`}
          >
            Experiences
          </h1>
        </div>

        {/* Products */}
        <div onClick={() => setItem('Products')} className="flex gap-1 mt-2 items-center group">
          <img
            src="./cart2.jpeg"
            alt=""
            className="w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
          />
          <h1
            className={`${item === 'Products' ? 'text-blue-950' : 'text-gray-500'} 
                        text-[20px] font-[Inter] cursor-pointer`}
          >
            Products
          </h1>
        </div>

      </div>
    </div>
  );
}

export default MiddleBar;
