import Navbar from "../Navbar/Navbar"

function Service() {
  return (
    <div className="flex flex-col items-center gap-3.5">
      <Navbar item="Services" />
      
      <div className="text-2xl mt-[150px]">
        services
      </div>
    </div>
  )
}

export default Service