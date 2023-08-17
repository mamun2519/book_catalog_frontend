import Books from "../layouts/Books";
import Footer from "../layouts/Footer";
import HeroSection from "../layouts/HeroSection";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
