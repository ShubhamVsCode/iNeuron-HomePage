import courseImg from "../assets/online-study.png";
import globe from "../assets/table-globe.png";
import hat from "../assets/graduation-hat.png";
const Students = () => {
  return (
    <div className="h-screen text-center  -mt-1">
      <h1 className="text-5xl text-white group bg-ineuron font-semibold py-12 ">
        "Pure Hardwork, No Shortcuts!"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="card-container mt-20 justify-between mx-40 flex">
        <div className="card rounded-2xl shadow-xl hover:shadow-md duration-300 group">
          <img
            className="w-1/2 mx-auto group-hover:scale-105 duration-300 ease-in-out"
            src={hat}
            alt=""
          />
          <p className="text-5xl font-bold mt-5 mb-2 text-gray-800">10000+</p>
          <p className="text-2xl mb-5 text-gray-500">Jobs Interview Cracked</p>
        </div>
        <div className="card rounded-2xl shadow-xl duration-300 hover:shadow-md group ">
          <img
            className="w-1/2 mx-auto group-hover:scale-105 duration-300 ease-in-out"
            src={courseImg}
            alt=""
          />
          <p className="text-5xl font-bold mt-5 mb-2 text-gray-800">400+</p>
          <p className="text-2xl mb-5 text-gray-500">Different Courses</p>
        </div>
        <div className="card rounded-2xl shadow-xl duration-300 hover:shadow-md group">
          <img
            className="w-1/2 mx-auto group-hover:scale-105 duration-300 ease-in-out"
            src={globe}
            alt=""
          />
          <p className="text-5xl font-bold mt-5 mb-2 text-gray-800">60+</p>
          <p className="text-2xl mb-5 text-gray-500">Available Countries</p>
        </div>
      </div>

      <h1 className="text-5xl text-[#343434]  mt-28 group font-semibold py-12 ">
        "Hall of fame"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="testimonial-card-container  flex items-center justify-between">
        <div className="testimonial-card bg-black"></div>
        <div className="testimonial-card bg-black"></div>
        <div className="testimonial-card bg-black"></div>
      </div>
    </div>
  );
};

export default Students;
