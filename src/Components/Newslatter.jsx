import newspic from '../../src/assets/newslatter.png'

const Newslatter = () => {
    return (
        <div className='max-w-7xl m-auto lg:mt-24 md:mt-18 mt-10 p-5'>
            <div className='flex justify-between flex-col lg:flex-row items-center'>
            <div className='mb-2'>
                <img src={newspic} alt="" />
            </div>
            <div className='space-y-4 '>
                <h1 className='text-4xl font-bold'>Subscribe to our
                    Newsletter!</h1>
                <h1 className='text-blue-400 text-lg'>Subscribe to our newsletter and stay
                    updated.</h1>
                    <input  placeholder="Email Address" className="border block border-blue-700 w-80 text-lg  p-4 rounded-xl" type="email" name="email" id="" required/>
                    <input className="border block w-80 text-lg bg-yellow-500 p-4 rounded-xl text-white" type="submit" value="Subscribe" required/>
            </div>
        </div>
        </div>
    );
};

export default Newslatter;