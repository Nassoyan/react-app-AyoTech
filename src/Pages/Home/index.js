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
                cartSide="homepage-arrow-container  "
                sliderSide=""
                sliderHeader="sliderHeader"
            />

            <SliderHomePage 
                title="Events" 
                slideShow={4}
                borderColor="border-yellow" 
                photos={slideImgArray} 
                cartSide="cartSide"
                sliderSide="sliderSide displayNone"
             />

            <SliderHomePage 
                title="Mia" 
                slideShow={4}
                borderColor="border-blue" 
                photos={slideImgArray} 
                cartSide="homepage-arrow-container blueBorder  "
                sliderSide="displayNone"
             />

            <SliderHomePage 
                title="Clubs" 
                slideShow={4}
                borderColor="border-yellow" 
                photos={slideImgArray} 
                cartSide="cartSide"
                sliderSide="sliderSide displayNone"
             />

            <SliderHomePage 
                title="Tours" 
                slideShow={4}
                borderColor="border-blue" 
                photos={slideArray} 
                cartSide="homepage-arrow-container blueBorder cartUnderSide"
                sliderSide="sliderUnderImg"
                sliderUnder="slick-block-photo-homepage-under"
                sliderHeader="sliderHeaderNone"

             />

            <SliderHomePage 
                title="Tours" 
                slideShow={4}
                borderColor="border-blue" 
                photos={slideArray} 
                cartSide="homepage-arrow-container blueBorder cartUnderSide"
                sliderSide="sliderUnderImg"
                sliderUnder="slick-block-photo-homepage-under"
                sliderHeader="sliderHeaderNone"

             />
            
            <Footer/>
        </div>
    )
}

export default Home