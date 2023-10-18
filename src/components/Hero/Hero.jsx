/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import book from "../../assets/book.png";
import "./Hero.css";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Hero = ({ hero, heroData, handleSlideChange }) => {
  const { active } = useSelector((state) => state.slideChange);

  return (
    <div
      className="flex items-center flex-col-reverse md:flex-row py-10 md:py-5 px-4 md:px-[120px] xl:px-[150px] text-center md:text-left relative"
      style={{
        background:
          "linear-gradient(47deg, #FFE5E5 10.79%, #F5FFFE 68.55%, #FFF 100%)",
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-secondary text-xl md:text-2xl lg:text-3xl xl:text-6xl font-semibold capitalize">
          {hero?.title}
        </h1>
        <p className="text-secondary md:text-sm lg:text-base xl:text-2xl my-2 sm:my-4">
          {hero?.description}
        </p>
        <Link
          to="/about"
          className="flex items-center justify-center gap-2 my-[10px] sm:my-[20px] xl:my-[40px] text-secondary border-2 border-secondary py-[5px] sm:py-3 px-4 xl:px-8 rounded-md"
        >
          <p>{hero?.button}</p>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </Link>
        <div className="flex items-center gap-4">
          {heroData.map((hero, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`pulsating-circle" ${
                index === active ? "p-2 border border-primary rounded-full" : ""
              }`}
            >
              <div
                className={`h-[10px] w-[10px] rounded-full ${
                  index === active ? "bg-primary" : "bg-gray-500"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img className="w-[60%] md:w-full mx-auto" src={book} alt="book" />
      </div>
    </div>
  );
};

export default Hero;
