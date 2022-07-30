const TestimonialCard = ({ image, title, description, dev }) => {
  return (
    <div className="relative testimonial-card hover:shadow-2xl hover:bg-[#d2ebff] group duration-300 shadow-md mb-10 bg-[#dcf0ff] p-10 rounded-xl">
      <img
        className="absolute w-28 -top-14 -left-10 opacity-0 duration-300 group-hover:opacity-100"
        src={dev}
        alt=""
      />

      <img
        className="w-32 m-auto mb-5 -mt-28 border-[6px] group-hover:-translate-y-5 group-hover:scale-110 duration-300 border-white h-32 object-cover rounded-full"
        src={image}
        alt=""
      />
      <p className="name group-hover:scale-110 group-hover:-translate-y-3 duration-300 text-xl font-semibold">
        {title}
      </p>
      <p className="text-black/60 z-10 group-hover:text-black">{description}</p>
    </div>
  );
};

export default TestimonialCard;
