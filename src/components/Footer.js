import logo from "../assets/footer/ineuron-logo.png";
import email from "../assets/footer/email.png";
import location from "../assets/footer/location.png";
import linkedin from "../assets/footer/linkedin.png";
import twitter from "../assets/footer/twitter.png";
import youtube from "../assets/footer/youtube.png";
import facebook from "../assets/footer/facebook.png";

const Footer = () => {
  return (
    <div className="box-border flex justify-around w-full gap-20 px-32 py-16 mt-40 text-white sm:px-5 sm:flex-col footer bg-ineuron h-96 sm:h-auto">
      <div className="space-y-10 sm:w-auto w-[26rem]">
        <div className="flex items-center justify-between">
          <img src={logo} className="h-10" alt="" />
          <div className="flex">
            <img src={facebook} className="w-10 p-2" alt="" />
            <img src={linkedin} className="w-10 p-2" alt="" />
            <img src={twitter} className="w-10 p-2 " alt="" />
            <img src={youtube} className="w-10 p-2 " alt="" />
          </div>
        </div>
        <div className="space-y-7">
          <div className="flex text-lg font-light ">
            <img
              src={location}
              className="inline-block w-10 h-10 p-2 mr-5 bg-white rounded-full "
              alt=""
            />
            <p className="sm:text-sm">
              17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
              Bengaluru, Karnataka 562129.
            </p>
          </div>
          <div className="flex items-center text-lg font-light sm:text-sm">
            <img
              src={email}
              className="inline-block w-10 h-10 p-2 mr-5 bg-white rounded-full"
              alt=""
            />
            <p>
              <span className="font-normal">Email us: </span> contact@ineuron.ai
            </p>
          </div>
        </div>
      </div>

      <div className="order-1 ">
        <p className="mb-6 text-3xl font-semibold ">Company</p>
        <div className="flex gap-6">
          <ul className="flex flex-col gap-6 text-left">
            <li>About Us</li>
            <li>Hackathon</li>
            <li>Job Guarantee</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="flex flex-col gap-6 text-left">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Job assistence</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="mb-6 text-3xl font-semibold ">Products</p>
        <ul className="flex flex-col gap-4 text-left">
          <li>InBlog</li>
          <li>Job Portal</li>
          <li>Hall of Fame</li>
          <li>Internship Portal</li>
          <li>Learn Code Online</li>
          <li>Become an affiliate</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
