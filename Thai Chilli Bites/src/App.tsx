import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import PopularDishes from "./Components/PopularDishes";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
    <div className="site">
      <Navbar />
  

      <main>
  
        <Hero />
        <About />
        <PopularDishes />
        <Contact />
      </main>

      <Footer />
    </div>
    </>
  );
}