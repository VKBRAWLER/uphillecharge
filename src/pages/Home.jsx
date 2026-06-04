import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import About from "../components/About";
import Locations from "../components/Locations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Purpose from "../components/Puspose";
import Partners from "../components/Partners";
const Home = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Purpose />
      <Locations />
        <Partners />
      <Footer />
    </section>
  );
};

export default Home;