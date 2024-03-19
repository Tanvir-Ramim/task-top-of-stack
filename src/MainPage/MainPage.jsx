import Banner from "../Components/Banner/Banner";
import DealSection from "../Components/DealSection";
import Featured from "../Components/Featured";
import Navbar from "../Components/Navbar";


const MainPage = () => {
    return (
        <div >
         <Navbar></Navbar>
         <Banner></Banner>
         <Featured></Featured>
         <DealSection></DealSection>
        </div>
    );
};

export default MainPage;