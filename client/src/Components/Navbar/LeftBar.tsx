import { Link } from 'react-router-dom'

function LeftBar() {
  return (
    <Link to="/" className='flex cursor-pointer'>
      <img src="./logo4.png" alt="logo" className='w-15 h-15' />
      <h1   className='text-blue-950 text-2xl font-bold font-[Inter]  mt-4'>Tork</h1>
    </Link>

  )
}

export default LeftBar