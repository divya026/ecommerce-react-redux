import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Categories from "./components/categories/Categories";
import NewArrivals from "./components/products/NewArrivals";
import Bestseller from "./components/products/Bestseller";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Navbar />
        <Slider />
        <Categories />
        <NewArrivals />
        <Bestseller />
        <NewsLetter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
