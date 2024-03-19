import deal1 from '../../src/assets/deal1.png'
import deal2 from '../../src/assets/deal2.png'
import deal3 from '../../src/assets/deal3.png'
const DealSection = () => {
    return (
        <div className="max-w-7xl m-auto">
            <h1 className='text-3xl font-bold lg:mb-12 md:mb-10 mb-5 mt-8  md:mt-12 lg:mt-16 p-2 ml-2'>Deals And Offers</h1>

            <div className='flex flex-wrap justify-center lg:justify-between gap-4'>
                <div className="card shadow-lg  card-side max-w-[360px]  mb-5 bg-base-100 ">
                   <img src={deal1}  />
                    <div className="card-body">
                        <h2 className="text-sm font-semibold">New movie is released!</h2>
                        <p className='text-base text-blue-700 font-semibold'>up to 14% discount on the base fare of domestic flights</p>
                        
                    </div>
                </div>
                <div className="card card-side max-w-[360px]  mb-5 bg-base-100 shadow-xl">
                <img src={deal2}  />
                    <div className="card-body">
                        <h2 className="text-sm font-semibold">New movie is released!</h2>
                        <p className='text-base text-blue-700 font-semibold'>up to 12% discount on the base fare of domestic flights</p>
                        
                    </div>
                </div>
                <div className="card card-side max-w-[360px]  mb-5 bg-base-100 shadow-xl">
                <img src={deal3}  />
                    <div className="card-body">
                        <h2 className="text-sm font-semibold">New movie is released!</h2>
                        <p className='text-base text-blue-700 font-semibold'>up to 14% discount on the base fare of domestic flights</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealSection;