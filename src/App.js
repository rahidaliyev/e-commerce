import './App.css';
import Carousel from './components/Carousel/Carousel';
import FirstContainer from './components/FirstContainer/FirstContainer';
import NewsCarousel from './components/NewsCarousel/NewsCarousel';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">

<FirstContainer/>
<Carousel/>
 <NewsCarousel/>
<Footer/>
    </div>
  );
}

export default App;
