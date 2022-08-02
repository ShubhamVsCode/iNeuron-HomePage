import vit from "../assets/partnerImage/vit.svg";
import gim from "../assets/partnerImage/gim.svg";
import keit from "../assets/partnerImage/keit.svg";
import malnad from "../assets/partnerImage/malnad.svg";
import taxila from "../assets/partnerImage/taxila.svg";
import bank from "../assets/partnerImage/bank.png";
const Patner = () => {
  return (
    <div className="flex items-center justify-between h-64 p-12 px-20 mx-auto my-10 shadow-lg sm:flex-col sm:p-4 mt-52 shadow-blue-200 rounded-3xl partner-background sm:h-40 sm:m-4 max-w-7xl">
      <div>
        <p className="text-5xl font-bold text-center text-white drop-shadow-md sm:font-normal sm:text-3xl w-68">
          Our Partnered <br /> Institutions
          <img src={bank} className="inline-block w-10 ml-3 sm:hidden" alt="" />
        </p>
      </div>
      <div className="flex justify-center gap-5 sm:gap-1 sm:flex-wrap h-36">
        <img src={taxila} alt="" />
        <img src={keit} alt="" />
        <img src={vit} alt="" />
        <img src={gim} alt="" />
        <img src={malnad} alt="" />
      </div>
    </div>
  );
};

export default Patner;
