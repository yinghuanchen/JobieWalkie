import React from "react"
import '../../stylesheets/main.css'

const MainPage = () => {
  return (
    <div className="main">
      <img
        className="main-img"
        src="https://store-images.s-microsoft.com/image/apps.46003.14259451864568504.ad5e5d07-0fbb-46ed-b9b6-a1b781645691.2ebcfa4e-172c-43d3-bf01-2d9a2a94e897?mode=scale&q=90&h=1080&w=1920"
        alt=""
      />
      <span className="main-text-1"> An Exclusive Community </span>
      <span className="main-text-2"> For Software Engineers </span>
    </div>
  );
}

export default MainPage