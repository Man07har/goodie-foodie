import React from "react";
import About from "./Components/About";
import LatestArticles from "./Components/LatestArticles";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <div>
        <Home />
        <About />
        <LatestArticles />
        <Footer />
      </div>
    </>
  );
}

export default App;
