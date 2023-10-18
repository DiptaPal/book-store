const Subscription = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 md:gap-0 xl:gap-[150px] pt-10"
      style={{
        background:
          "linear-gradient(47deg, #FFE5E5 10.79%, #F5FFFE 68.55%, #FFF 100%)",
      }}
    >
      <div className="lg:w-1/2 px-4 lg:pl-[62px] sx:flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
        <div className="flex justify-center items-center gap-2">
          <div className="border-b-2 border-primary w-8"></div>
          <p className="text-sm font-bold text-primary">ebook</p>
        </div>
        <h3 className="text-[30px] font-extrabold text-secondary">
          Access, Read, Practice & Engage <br className="hidden xl:block" />
          with Digital Content (eBook)
        </h3>
        <p className="text-lg mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col sx:flex-row sx:items-center gap-5 sx:gap-0">
          <input
            className="w-full sx:w-3/4 2xl:w-[450px] outline-none rounded-lg sx:rounded-none sx:rounded-s-lg px-2 sx:pl-5 py-5"
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <button className="px-11 py-[18px] bg-primary text-xl text-white rounded-lg sx:rounded-none sx:rounded-e-lg">
            Login
          </button>
        </div>
      </div>
      <div className="lg:pr-[25px]">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/S7NqVPW/Image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Subscription;
