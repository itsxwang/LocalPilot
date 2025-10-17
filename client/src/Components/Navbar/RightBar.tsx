import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { CircleHelp } from "lucide-react"; // updated to correct lucide icon

function RightBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center md:gap-6 gap-3">
      {windowWidth > 1025 && (
        <div className="flex font-semibold text-blue-950 text-[19px] hover:cursor-pointer font-[Inter] whitespace-nowrap">
          Become a host
        </div>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex p-3 relative rounded-full items-center text-blue-950 text-2xl hover:cursor-pointer font-[Inter] bg-[#ebebeb] hover:bg-[#e3e3e3] transition ease-in-out duration-300"
      >
        {/* 🔥 Animated icon transition */}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <MdClose />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <RxHamburgerMenu />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-10 right-0 mt-2  bg-white rounded-lg shadow-lg z-50 p-3"
            >
              <ul className="py-2">
                <li className="px-4 py-2 text-[19px] hover:bg-gray-100 cursor-pointer rounded-full text-nowrap">Become a host <p className="text-[14px] text-gray-500 text-nowrap">If you have something to sale or rent</p></li>
                <hr className="mb-2 mt-2 text-gray-300" />
                <li className="px-4 py-2 text-[19px] hover:bg-gray-100 cursor-pointer rounded-full">Profile</li>
                <li className="px-4 py-2 text-[19px] hover:bg-gray-100 cursor-pointer rounded-full">Logout</li>
                <li className="px-4 py-2 text-[19px] hover:bg-gray-100 cursor-pointer rounded-full">Login or Sign up</li>
                <hr className="mb-2 mt-2 text-gray-300" />
                <li className="px-4 py-2 text-[19px] hover:bg-gray-100 cursor-pointer rounded-full">
                  Help <CircleHelp className="inline mb-0.5" />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default RightBar;
