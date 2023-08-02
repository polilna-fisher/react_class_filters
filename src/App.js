import './App.css';
import Main_screen from "./components/main_screen/main_screen";
import AboutUs from "./components/about_us/about_us";
import Footer from "./components/footer/footer";
import OurBest from "./components/our_best/our_best";
import OurCoffee from "./components/our_coffee/our_coffee";
import AboutOurBeans from "./components/about_our_beans/about_our_beans";
import AllItems from "./components/all_items/all_items";
import AboutIt from "./components/about_it/about_it";

function App() {
  return (
    <div className="App">
        <Main_screen/>
        <AboutUs/>
        <OurBest/>
        <Footer/>


        <OurCoffee/>
        <AboutOurBeans/>
        <AllItems/>
        <Footer/>

        <OurCoffee/>
        <AboutIt/>
        <Footer/>
    </div>
  );
}

export default App;
