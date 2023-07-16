import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";


function App() {
  return (
    <div className="App container">
      <Nav/>
      <Carousel/>
      <Home/>
      <Footer/>
          </div>
  );
}

export default App;
