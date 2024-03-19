import './Banner.css'
import { FaSearch } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            <div className="hero md:p-7 p-4  banner-main " >
  
  <div className="hero-content  ">

    <div className="max-w-7xl m-auto">
      <h1 className="text-white tex md:text-4xl text-3xl font-semibold lg:mt-5 mb-6">Welcome To <span className='text-blue-600 font-bold '> AirBook</span></h1>
      
      <div className='bg-white rounded-lg'>
    
         
        <div className='md:flex md:flex-wrap  md:space-y-0 space-y-7 p-10 gap-10 ' >
        <div className='flex border border-gray-500 rounded-lg'>
            <h1 className='border rounded-lg flex items-center border-r-gray border-r-2 font-semibold p-4'>DAC</h1>
            <h1 >
            <h2 className='p-4 font-semibold'>Dhaka <p className='font-medium text-sm'>Hazat Shahjalal International</p> </h2>
            </h1>
        </div>
        <div className='flex border border-gray-500 rounded-lg'>
            <h1 className='border rounded-lg flex items-center border-r-gray border-r-2 font-semibold p-4'>Cxb</h1>
            <h1 >
            <h2 className='p-4 font-semibold'>Cox's Bazar <p className='font-medium text-sm'>Cox's Bazar International</p> </h2>
            </h1>
        </div>
        <div className='flex border border-gray-500 rounded-lg'>
            <h1 className='border rounded-lg flex items-center border-r-gray border-r-2 font-semibold p-4'>03</h1>
            <h1 >
            <h2 className='p-4 font-semibold'>October <p className='font-medium text-sm'>Tuesday, 2024</p> </h2>
            </h1>
        </div>
        <div className='flex border border-gray-500 rounded-lg'>
            <h1 className='border rounded-lg flex items-center border-r-gray border-r-2 font-semibold p-4'>05</h1>
            <h1 >
            <h2 className='p-4 font-semibold'>October <p className='font-medium text-sm'>Friday , 2024</p> </h2> 
            </h1>
        </div>
         <div  >
         <button className="btn   btn-warning"><FaSearch className='text-2xl p' /></button>
        
         </div>

        

        </div>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;