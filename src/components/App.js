import React, { useState } from "react";

import Header from "./Header";
import Blog from "./Blog";

import backgroundImgN from "../styles/images/neven-k.jpg";
import backgroundImgR from "../styles/images/roma-k.jpg";
import backgroundImgJ from "../styles/images/jess-b.jpg"
import "../styles/App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {loggedIn && (
        <>
          <Header /> <Blog />
        </>
      )}

      {!loggedIn && (
        <div>
          {/* <img alt="Photo by Neven Krcmarek on Unsplash" src={backgroundImgN} /> */}
          {/* <img alt="Photo by Roma Kaiuk on Unsplash" src={backgroundImgR} /> */}
          <img alt="Photo by Jess Bailey on Unsplash" src={backgroundImgJ} />
        </div>
      )}
    </div>
  );
};

export default App;