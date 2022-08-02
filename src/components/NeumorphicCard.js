import "../css/neumorphicCard.css";

const NuemorphicCard = ({ image, title, price, description }) => {
  return (
    <div className="relative w-1/4 p-5 space-y-4 duration-300 sm:p-4 sm:w-auto card group h-80 sm:h-auto">
      <img
        src={image}
        className="duration-300 group-hover:scale-110 group-hover:-translate-y-5 rounded-xl"
        alt=""
      />
      <h1 className="text-xl font-semibold ">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <p className="font-semibold text-ineuron">&#8377; {price}</p>
      <p className="absolute text-red-600 right-6 bottom-4">Live</p>
    </div>
  );
};

export default NuemorphicCard;
