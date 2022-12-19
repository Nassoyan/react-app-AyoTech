import Header from "./Components/Header";
import Content from "./Components/Content/content";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
       <Content />
      <Footer /> 
    </div>
  );
}

export default App;
