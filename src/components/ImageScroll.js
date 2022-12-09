import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import fruits1 from '../images/blueberrySample.jpg'
import fruits2 from '../images/grapessSample.jpg'
import fruits3 from '../images/orangeSample.jpg'
import fruits4 from "../images/strawberrySample.jpg";


const ImageScroll = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        dynamicHeight={true}
        showArrows={true}
        showThumbs={false}
        swipeable={true}
      >
        <div>
          <div className="w-screen h-screen">
            <img
              className="object-cover  h-screen w-screen"
              src={fruits1}
              alt="some fruits"
            />
          </div>
        </div>
        <div>
          <img
            src={fruits2}
            className="object-cover h-screen"
            alt="some fruits on a plate"
          />
        </div>
        <div>
          <img
            className="object-cover h-screen"
            src={fruits3}
            alt="some fruits again"
          />
        </div>
        <div>
          <img
            className="object-cover h-screen"
            src={fruits4}
            alt="some fruits again"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageScroll;
