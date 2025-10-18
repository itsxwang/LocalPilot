import Navbar from "../Navbar/Navbar"

function Products() {
   return (
    <div className="flex flex-col items-center gap-3.5">
      <Navbar item="Products" />
      
      <div className="text-2xl mt-[150px]">
        products
      </div>
    </div>
  )
}

export default Products