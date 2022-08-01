import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.js";
import HeroSection2 from "./components/HeroSection2.js";
import Students from "./components/Students.js";
import WhatYouLearn from "./components/WhatYouLearn";
import Products from "./components/Products";
import TechAvengers from "./components/TechAvengers.js";

function App() {
  return (
    <div className="App">
      <div className=" header">
        <Navbar />
        <HeroSection />
        {/* <HeroSection2 /> */}
      </div>
      <Students />
      <WhatYouLearn />
      <Products />
      <TechAvengers />
    </div>
  );
}

export default App;
