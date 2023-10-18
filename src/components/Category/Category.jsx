const Category = () => {
  return (
    <div className="mx-16 py-[92px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10">
      <button className="col-span-4">
        <div
          className="relative w-full h-[200px] sx:h-[394px] bg-cover bg-center bg-no-repeat rounded-xl category-bg"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url("https://i.ibb.co/jH95LCm/historical-fiction.jpg")',
          }}
        >
          <p className="absolute bottom-0 left-0 right-0 pb-6 text-center text-base sx:text-3xl font-extrabold text-white">
            Higher Education
          </p>
        </div>
      </button>
      <div className="col-span-4 order-last md:order-none">
        <div className="relative border border-[#CACACA] rounded-xl w-full h-[200px] sx:h-[394px]">
          <div className="text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
            <h1 className="text-base sx:text-5xl font-bold text-secondary">
              Explore our Top Categories
            </h1>
            <button className="py-2 px-5 text-white mt-[45px] bg-primary text-base sx:text-2xl font-bold rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
      <button className="col-span-4">
        <div
          className="relative w-full h-[200px] sx:h-[394px] bg-cover bg-center bg-no-repeat rounded-xl category-bg"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url("https://i.ibb.co/dBwsWFx/thriller.jpg")',
          }}
        >
          <p className="absolute bottom-0 left-0 right-0 pb-6 text-center text-base sx:text-3xl font-extrabold text-white">
            Management Books
          </p>
        </div>
      </button>
      <button className="col-span-4">
        <div
          className="relative w-full h-[200px] sx:h-[394px] bg-cover bg-center bg-no-repeat rounded-xl category-bg"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url("https://i.ibb.co/TcnBtB2/military.jpg")',
          }}
        >
          <p className="absolute bottom-0 left-0 right-0 pb-6 text-center text-base sx:text-3xl font-extrabold text-white">
            Finance Books
          </p>
        </div>
      </button>
      <button className="col-span-4">
        <div
          className="relative w-full h-[200px] sx:h-[394px] bg-cover bg-center bg-no-repeat rounded-xl category-bg"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url("https://i.ibb.co/Wzwks7P/self-help.jpg")',
          }}
        >
          <p className="absolute bottom-0 left-0 right-0 pb-6 text-center text-base sx:text-3xl font-extrabold text-white">
            Engineering Books
          </p>
        </div>
      </button>
      <button className="col-span-4">
        <div
          className="relative w-full h-[200px] sx:h-[394px] bg-cover bg-center bg-no-repeat rounded-xl category-bg"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url("https://i.ibb.co/C5pMx0f/mystery.jpg")',
          }}
        >
          <p className="absolute bottom-0 left-0 right-0 pb-6 text-center text-3xl font-extrabold text-white">
            Commerce books
          </p>
        </div>
      </button>
    </div>
  );
};

export default Category;
