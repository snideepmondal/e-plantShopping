import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";

const App = () => {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <AboutUs />
      )}
    </div>
  );
};

export default App;
