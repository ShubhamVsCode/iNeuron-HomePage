const TestimonialCard = ({ image, title, description, dev }) => {
  return (
    <div className="relative testimonial-card hover:shadow-2xl hover:bg-[#d2ebff] group duration-300 shadow-md mb-10 bg-[#dcf0ff] p-10 rounded-xl sm:w-52 sm:mb-32 ">
      <img
        className="absolute duration-300 opacity-0 w-28 -top-14 -left-10 group-hover:opacity-100"
        src={dev}
        alt=""
      />

      <img
        className="w-32 m-auto mb-5 -mt-28 border-[6px] group-hover:-translate-y-5 group-hover:scale-110 duration-300 border-white h-32 object-cover rounded-full"
        src={image}
        alt=""
      />
      <p className="text-xl font-semibold duration-300 name group-hover:scale-110 group-hover:-translate-y-3">
        {title}
      </p>
      <p className="z-10 text-black/60 group-hover:text-black">{description}</p>
    </div>
  );
};

export default TestimonialCard;
