import Banner from "../Components/Banner/Banner";
import DealSection from "../Components/DealSection";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newslatter from "../Components/Newslatter";
import Testimonials from "../Components/Testimonials/Testimonials";


const MainPage = () => {
    return (
        <div >
         <Navbar></Navbar>
         <Banner></Banner>
         <Featured></Featured>
         <DealSection></DealSection>
         <h1 className="max-w-7xl m-auto"><h1 className='text-3xl font-bold lg:mb-12 md:mb-10 mb-5 mt-8  md:mt-12 lg:mt-16 p-2 ml-2'>Testimonials</h1></h1>
         <Testimonials></Testimonials>
         <Newslatter></Newslatter>
         <Footer></Footer>
        </div>
    );
};

export default MainPage;