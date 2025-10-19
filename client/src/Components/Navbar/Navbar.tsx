import LeftBar from './LeftBar';
import MiddleBar from './MiddleBar';
import RightBar from './RightBar';

function Navbar({ item }: { item: string }) {

  return (
    <nav className="w-full fixed top-0 bg-white shadow-md z-50">
      {/* Desktop Navigation */}

      <div className="hidden md:flex justify-between items-center px-6 py-4  mx-auto">
        <div className="min-w-[200px]"> {/* Added minimum width */}
          <LeftBar />
         
        </div>
        <MiddleBar item={item} />
        <RightBar />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        
        <div className="flex justify-center gap-7 items-center px-4 py-3">
          <LeftBar />
          
          <RightBar />

          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            'translate-x-0 opacity-100' 
            transition-all duration-300 ease-in-out absolute top-full left-0 w-full bg-white shadow-lg`}
        >
          <div className="px-4 py-3 space-y-4">
            <div className="flex justify-center">
              <MiddleBar item={item}/>
            </div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
