import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PopularDishes from "./Components/PopularDishes";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <About />

   <PopularDishes
/>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;