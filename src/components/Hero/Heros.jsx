import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";
import { Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { setActive } from "../../redux/features/slideChange/slideChangeSlice";
import book from "../../assets/book.png";

const heroData = [
  {
    id: 0,
    title: "ipsum dolor si",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    image: book,
    button: "Read more",
  },
  {
    id: 1,
    title: "ipsum dolor si",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    image: book,
    button: "Read more",
  },
  {
    id: 2,
    title: "ipsum dolor si",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    image: book,
    button: "Read more",
  },
  {
    id: 3,
    title: "ipsum dolor si",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    image: book,
    button: "Read more",
  },
];

const Heros = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="relative w-full z-0">
      <button className="absolute p-[5px] sm:p-[12px] bg-white border-2 border-primary rounded-full left-0 sm:left-12 top-[45%] sm:top-[46%] z-50 opacity-50 sm:opacity-100 hover:opacity-100 prev">
        <span className="text-center text-base sm:text-xl text-primary opacity-100">
          <AiOutlineArrowLeft />
        </span>
      </button>
      <button className="absolute p-[5px] sm:p-[12px] bg-white border-2 border-primary rounded-full right-0 sm:right-12 top-[45%] sm:top-[46%] z-50 opacity-50 sm:opacity-100 hover:opacity-100 next">
        <span className="text-center text-base sm:text-xl text-primary">
          <AiOutlineArrowRight />
        </span>
      </button>
      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => {
          // Handle external pagination change
          // For example, update the active index of your custom pagination component
          // console.log("Current slide index:", swiper.activeIndex);
          dispatch(setActive(swiper.activeIndex));
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {heroData.map((hero, index) => (
          <SwiperSlide key={index}>
            <Hero
              handleSlideChange={handleSlideChange}
              hero={hero}
              heroData={heroData}
            ></Hero>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Heros;
