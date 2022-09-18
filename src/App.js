import './App.css';
import Navbar from "./components/Navbar/Navbar"
import FirstContainer from "./components/FirstContainer/FirstContainer"
import SecondContainer from './components/SecondContainer/SecondContainer';
import ThirdContainer from './components/ThirdContainer/ThirdContainer';
import FourthContainer from './components/FourthContainer/FourthContainer';
import FifthContainer from './components/FifthContainer/FifthContainer';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
<Navbar/>
<FirstContainer/>
<SecondContainer/>
<ThirdContainer/>
<FourthContainer/>
<FifthContainer/>
<Footer/>


    </div>
  );
}

export default App;
