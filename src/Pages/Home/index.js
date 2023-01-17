import HomePageHeader from "../../Components/HomePageComponents/HomPageHeader"
import SliderEvents from "../../Components/HomePageComponents/SliderEvents"
import SliderOnline from "../../Components/HomePageComponents/SliderOnline"

function Home() {
    return (
        <div>
            <HomePageHeader />
            <SliderOnline />
            <SliderEvents/>
        </div>
    )
}

export default Home