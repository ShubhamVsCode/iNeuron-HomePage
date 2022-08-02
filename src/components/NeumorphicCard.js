import "../css/neumorphicCard.css";

const NuemorphicCard = ({ image, title, price, description }) => {
  return (
    <div className="relative w-1/4 p-5 space-y-4 duration-300 dark:border dark:border-slate-800 dark:hover:shadow-none dark:shadow-none sm:p-4 sm:w-auto card group h-80 sm:h-auto">
      <img
        src={image}
        className="duration-300 group-hover:scale-110 group-hover:-translate-y-5 rounded-xl"
        alt=""
      />
      <h1 className="text-xl font-semibold dark:text-darkTextColor">{title}</h1>
      <p className="text-gray-500 dark:text-darkSecTextColor">{description}</p>
      <p className="font-semibold text-ineuron dark:text-blue-100">
        &#8377; {price}
      </p>
      <p className="absolute text-red-600 right-6 bottom-4">Live</p>
    </div>
  );
};

export default NuemorphicCard;
