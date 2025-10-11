import LeftBar from "./LeftBar"
import MiddleBar from "./MiddleBar"
import RightBar from "./RightBar"

function Navbar() {
  return (
    
    <div className  ="bg-gradient-to-b from-[#ffffff] from-[39.9%] to-[#f2f2f2] flex justify-between mt-5 py-2 px-7">

      <LeftBar />
      <MiddleBar />
      <RightBar />
      
    </div>
  )
}

export default Navbar