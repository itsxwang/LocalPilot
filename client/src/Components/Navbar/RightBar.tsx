import { RxHamburgerMenu } from "react-icons/rx";

function RightBar() {
  return (
    <div className="flex items-center md:gap-6 gap-3">
      <div className="flex font-semibold text-blue-950 text-[20px] hover:cursor-pointer font-[Inter]">
        Become Provider
      </div>
      <div className="flex p-3 rounded-full items-center text-blue-950 text-2xl hover:cursor-pointer font-[Inter] bg-[#ebebeb] hover:bg-[#e3e3e3] transition ease-in-out duration-300">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}

export default RightBar;