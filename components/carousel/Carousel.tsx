import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/carousel.module.css";

const images = [
  "/images/slide1.png",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide1.png",
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
      showArrows={false}
      autoPlay={true}
      transitionTime={1000}
      className={styles.customCarousel}
    >
      {images.map((imageSrc, index) => (
        <div key={index} className="mt-7">
          <div className="w-full h-44 relative rounded-lg">
            <Image
              className="rounded-lg"
              src={imageSrc}
              alt="Slider 1"
              layout="fill"
              //   objectFit="cover"
              quality={100}
            />
          </div>
          {/* <p className="legend">Slider 1</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
