import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Navbar />
        <Slider />
      </header>
    </div>
  );
}

export default App;
