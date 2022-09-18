import './App.css';
import Navbar from "./components/Navbar/Navbar"
import FirstContainer from "./components/FirstContainer/FirstContainer"
import SecondContainer from './components/SecondContainer/SecondContainer';
import ThirdContainer from './components/ThirdContainer/ThirdContainer';
function App() {
  return (
    <div className="App">
<Navbar/>
<FirstContainer/>
<SecondContainer/>
<ThirdContainer/>
    </div>
  );
}

export default App;
