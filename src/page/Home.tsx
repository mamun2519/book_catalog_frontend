import Books from "../layouts/Books";
import Footer from "../layouts/Footer";
import HeroSection from "../layouts/HeroSection";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Books />
      <Footer />
    </>
  );
};

export default Home;
