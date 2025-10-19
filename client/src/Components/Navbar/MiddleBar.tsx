import { Link } from 'react-router-dom';
import './middlebar.css'

function MiddleBar({ item }: { item: string }) {



  return (
    <div className="flex flex-col items-center w-full">

      <div className="flex flex-wrap justify-center gap-4 md:gap-12 px-4">

        {/* Experiences */}
        <Link to="/experiences" className={`${item === 'Experiences' ? 'selected' : 'item'} flex items-center min-w-[120px] transition-ease-in-out transition duration-300 p-4`}>
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
        </Link>

        {/* Homes */}
        <Link to="/homes" className={`${item === 'Homes' ? 'selected' : 'item'} flex items-center min-w-[120px] transition-ease-in-out transition duration-300 p-4`}>
          <img
            src="./house.png"
            alt=""
            className="w-7 h-7 md:w-10 md:h-9 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
          />
          <h1
            className={`${item === 'Experiences' ? 'text-blue-950' : 'text-gray-500 hover:text-blue-950'} 
                        text-[16px] md:text-[20px] font-[Inter] cursor-pointer`}
          >
            Homes
          </h1>
        </Link>
      {/* Products */}
      <Link to="/products" className={`${item === 'Products' ? 'selected' : 'item'} flex items-center min-w-[120px] p-5 transition-ease-in-out transition duration-300`}>
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
      </Link>
        {/* Services */}
        <Link to="/service" className={` ${item === 'Services' ? 'selected' : 'item'} flex items-center min-w-[120px] p-4 transition-ease-in-out transition duration-300`}>
          <img
            src="./pan.png"
            alt=""
            className="w-7 h-7 md:w-10 md:h-9 transition-transform duration-300 ease-in-out hover:scale-110 group-hover:[&:has(+h1:hover)]:scale-110 cursor-pointer"
          />
          <h1
            className={`${item === 'Services' ? 'text-blue-950' : 'text-gray-500 hover:text-blue-950'} 
                        text-[16px] md:text-[20px] font-[Inter] cursor-pointer`}
          >
            Services
          </h1>
        </Link>


      </div>

    </div>
  );
}

export default MiddleBar;
