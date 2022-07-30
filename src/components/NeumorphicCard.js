import "../css/neumorphicCard.css";

const NuemorphicCard = ({ image, title, price, description }) => {
  return (
    <div className="card duration-300 group relative w-1/4 p-5 space-y-4 h-80">
      <img
        src={image}
        className="group-hover:scale-110 duration-300 group-hover:-translate-y-5 rounded-xl"
        alt=""
      />
      <h1 className="text-xl font-semibold ">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <p className="font-semibold text-ineuron">&#8377; {price}</p>
      <p className="text-red-600 absolute right-6 bottom-4">Live</p>
    </div>
  );
};

export default NuemorphicCard;
