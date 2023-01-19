import HomePageHeader from "../../Components/HomePageComponents/HomPageHeader"
import SliderHomePage from "../../Components/HomePageComponents/Slider"
import Footer from "../../Components/RestaurantPageComponents/Footer"
import { slideImgArray, slideArray } from "../../data"

function Home() {
    return (
        <div>
            <HomePageHeader />

            <SliderHomePage 
                title="Online" 
                slideShow={3}
                borderColor="border-default"
                photos = {slideArray} 
                cartSide="homepage-arrow-container"
                sliderSide=""
            />

            <SliderHomePage 
                title="Events" 
                slideShow={4}
                borderColor="border-yellow" 
                photos={slideImgArray} 
                cartSide="cartSide"
                sliderSide="sliderSide"

             />

            <SliderHomePage 
                title="Restaurants" 
                slideShow={4}
                borderColor="border-blue" 
                photos={slideImgArray} 
                cartSide="homepage-arrow-container blueBorder "
                sliderSide=""

             />
            
            <Footer/>
        </div>
    )
}

export default Home