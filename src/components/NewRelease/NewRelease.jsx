import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const books = [
  {
    id: 1,
    name: "The Mind Connection",
    author: "Joyce Meyer",
    rating: 4,
    image: "https://i.ibb.co/0DqgxGc/book1.png",
  },
  {
    id: 2,
    name: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    rating: 4,
    image: "https://i.ibb.co/K6QvXcy/book2.png",
  },
  {
    id: 3,
    name: "Battlefield of the mind",
    author: "Joyce Meyer",
    rating: 4,
    image: "https://i.ibb.co/DwPYQZZ/book3.png",
  },
  {
    id: 4,
    name: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    rating: 4,
    image: "https://i.ibb.co/SnqWgvB/book4.png",
  },
  {
    id: 5,
    name: "The Mind Connection",
    author: "Joyce Meyer",
    rating: 4,
    image: "https://i.ibb.co/0DqgxGc/book1.png",
  },
  {
    id: 6,
    name: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    rating: 4,
    image: "https://i.ibb.co/K6QvXcy/book2.png",
  },
  {
    id: 7,
    name: "Battlefield of the mind",
    author: "Joyce Meyer",
    rating: 4,
    image: "https://i.ibb.co/DwPYQZZ/book3.png",
  },
  {
    id: 8,
    name: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    rating: 4,
    image: "https://i.ibb.co/SnqWgvB/book4.png",
  },
];

const NewRelease = () => {
  return (
    <div className="text-center my-[92px]">
      <h2 className="text-3xl text-secondary font-semibold">
        New Release Books
      </h2>
      <p className="text-lg text-[#767070]">
        1000+ books are published by different authors everyday.{" "}
      </p>
      <div className="flex items-center justify-center">
        <button className="text-primary font-bold text-base flex justify-center items-center gap-2 my-8">
          <p>View all products</p>
          <BsArrowRight></BsArrowRight>
        </button>
      </div>
      <div className="px-2 lg:px-[86px]">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1360: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index} className="px-5 py-[50px]">
                <div
                  className="rounded-md p-5 flex flex-col items-center gap-2"
                  style={{
                    boxShadow:
                      "1.03103px 4.12414px 15px 0px rgba(130, 130, 130, 0.18)",
                  }}
                >
                  <img
                    className="w-[150px] h-[200px]"
                    src={book.image}
                    alt=""
                  />
                  <p className="text-base font-semibold flex-1">{book.name}</p>
                  <p className="text-[#8F8F8F] text-sm flex-1">{book.author}</p>
                  <div>
                    <p>{book.rating}</p>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewRelease;
