import Footer from "../components/Footer";
import Prizes from "../components/Prizes";
import Query from "../components/Query";
import Schedule from "../components/Schedule";
import AboutSection from "./AboutSection";
import Banner from "./HeroSection";
import Navbar from "./Navbar";
import Popup from "./Popup";
import Slideshow from "./Slideshow";
import TextScroll from "./TextScroll";
import Themes from "./Themes";
import Sponsor from "../components/Sponsors";

const Starting = () => {
  return (
    <>
      <Navbar />
      <Popup />
      <Banner />
      <TextScroll />
      <AboutSection />
      <Themes />
      <Schedule />
      <Prizes />
      <Slideshow />
      <Sponsor />
      <Query />
      <Footer />
    </>
  );
};

export default Starting;
