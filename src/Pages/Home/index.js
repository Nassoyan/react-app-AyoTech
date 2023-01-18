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
                borderColor="border-default"
                photos = {slideArray} 
                fontSize="18px"
                circle="border-default-circle" 
                cartSide="sliderOnline-block-side"
                sliderSide="sliderOnline-slider-side"
            />

            <SliderHomePage 
                title="Events" 
                borderColor="border-yellow" 
                photos={slideImgArray} 
                className="title-none" 
                fontSize="16px" 
                circle="border-yellow-circle"
                cartSide="sliderEvents-block-side"
                sliderSide="sliderEvents-slider-side"
             />

            <SliderHomePage 
                title="Restaurants" 
                borderColor="border-default"
                photos = {slideArray} 
                fontSize="18px"
                circle="border-default-circle" 
                cartSide="sliderOnline-block-side"
                sliderSide="sliderOnline-slider-side"
            />

            <SliderHomePage 
                title="Clubs" 
                borderColor="border-yellow" 
                photos={slideImgArray} 
                className="title-none" 
                fontSize="16px" 
                circle="border-yellow-circle"
                cartSide="sliderEvents-block-side"
                sliderSide="sliderEvents-slider-side" 
            />

            <SliderHomePage 
                title="Tours" 
                borderColor="border-default"
                photos = {slideArray} 
                fontSize="18px"
                circle="border-default-circle" 
                cartSide="sliderOnline-block-side"
                sliderSide="sliderOnline-slider-side"
                display="display-none"
            />
            <Footer/>
        </div>
    )
}

export default Home