import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.js";
import Students from "./components/Students.js";
import WhatYouLearn from "./components/WhatYouLearn";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <HeroSection />
      </div>
      <Students />
      <WhatYouLearn />
      <Products />
    </div>
  );
}

export default App;
