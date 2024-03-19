import test1 from '../../assets/test1.png'
import testr from '../../assets/testr.png'
import testl from '../../assets/testl.png'

const Testimonials = () => {
    return (
        <div className="bg-blue-700">
            <div>
                
            </div>
            <div className="max-w-7xl m-auto flex justify-around gap-2 p-20">
                
                <div className='hidden md:block'>
                    <img className='h-60 ' src={testl} alt="" />
                </div>

                <div>
                    <div className="card h-60 lg:w-full    card-side bg-base-100 shadow-xl">
                        <img className=''  src={test1} alt="" />
                        <div className="card-body ">
                            <p className='hidden lg:block'>"Unforgettable journeys with John and Sarah!  Their travel expertise turned our dreams into reality. Can't wait to explore with them again!"</p>
                            <p className='text-lg font-semibold mt-5'>Emily <br />
                            <samp className='text-base'>Adventure Enthusiast </samp></p>
                           
                            <div className="rating w-20">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
</div>
                            <div className="card-actions justify-end">
                            <h1 className='text-7xl text-blue-700'>”</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block '>
                    <img className='h-60' src={testr} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;