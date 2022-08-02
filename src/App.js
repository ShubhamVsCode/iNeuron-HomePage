import Navbar from "./components/Navbar";
import HeroSection2 from "./components/HeroSection2.js";
import Students from "./components/Students.js";
import WhatYouLearn from "./components/WhatYouLearn";
import Products from "./components/Products";
import TechAvengers from "./components/TechAvengers.js";
import Patner from "./components/Patner.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="h-screen header">
        <Navbar />
        <HeroSection2 />
      </div>
      <Students />
      <WhatYouLearn />
      <Products />
      <TechAvengers />
      <Patner />
      <Footer />
    </div>
  );
}

export default App;
