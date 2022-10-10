import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgoundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie name</h1>
        <div className="banner__buttons">
          <button className="banner__button">PLay</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
