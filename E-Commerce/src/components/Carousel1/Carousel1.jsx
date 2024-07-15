import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../HomePage/images/cases.jpg";
import image2 from "../HomePage/images/keyboard.jpg";
import image3 from "../HomePage/images/mouse.jpg";
import image4 from "../HomePage/images/headphones.jpg";
import image5 from "../HomePage/images/ps5.jpg";
import image6 from "../HomePage/images/gpus.jpg";
import image7 from "../HomePage/images/giftcard.png";
import image8 from "../HomePage/images/monitor.png";

const slides = [
  { title: "Cases", image: image1 },
  { title: "Keyboards", image: image2 },
  { title: "Mouse", image: image3 },
  { title: "Headphones", image: image4 },
  { title: "Playstation", image: image5 },
  { title: "Monitors", image: image8 },
  { title: "Gift Cards", image: image7 },
  { title: "Graphic Cards", image: image6 },
];

export const Carousel1 = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        spaceBetween={30}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <a>explore</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
