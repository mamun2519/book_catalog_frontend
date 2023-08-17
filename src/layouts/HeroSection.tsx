import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeroSection = () => {
  return (
    <div className=" mx-auto  w-[80vw] ">
      <Carousel>
        <div>
          <img src="https://wafilife-media.wafilife.com/uploads/2023/03/lifestyle_desktop-min-1.png" />
        </div>
        <div>
          <img src="https://wafilife-media.wafilife.com/uploads/2023/03/eid-anondo_150-book-offer_Desktop-copy-min.jpg" />
        </div>
        <div>
          <img src="https://wafilife-media.wafilife.com/uploads/2023/05/app-slider-2023Desktop-min.jpg" />
        </div>
        <div>
          <img src="https://wafilife-media.wafilife.com/uploads/2023/03/eid-anondo_150-book-offer_Desktop-copy-min.jpg" />
        </div>
        <div>
          <img src="https://wafilife-media.wafilife.com/uploads/2023/03/lifestyle_desktop-min-1.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
