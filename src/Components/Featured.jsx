import feature1 from '../../src/assets/Feature3.png'
import feature2 from '../../src/assets/Feature2.png'
import feature3 from '../../src/assets/Feature1.png'

const Featured = () => {
    return (
        <div className="max-w-7xl m-auto ">
            <h1 className='text-3xl font-bold lg:mb-8 md:mb-5 mb-4 mt-8  md:mt-12 lg:mt-16 p-2 ml-2'>Feature Destinations</h1>
            <div className='flex
             flex-wrap lg:justify-between gap-5 justify-center ml-2'>
            <div>
                <div className="card w-[360px] h-[400px]  bg-base-100 shadow-xl">
                    <figure className=" pt-10">
                        <img src={feature1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines.</h2>
                       
                        <div className="card-actions">
                            <button className="btn px-12  btn-warning">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card  w-[360px]  h-[400px] bg-base-100 shadow-xl">
                    <figure className=" pt-10">
                        <img src={feature2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Discover the timeless city with Touristanbul of Turkish Airlines</h2>
                       
                        <div className="card-actions">
                            <button className="btn px-12  btn-warning">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card  w-[360px]  h-[400px] bg-base-100 shadow-xl">
                    <figure className=" pt-10">
                        <img src={feature3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">the best of Abu Dhabi with exclusive Etihad Airways!</h2>
                       
                        <div className="card-actions">
                            <button className="btn px-12  btn-warning">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;