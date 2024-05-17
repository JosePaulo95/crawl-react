import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"; // Import the CSS file for styling

export function Menu() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/game"); // Assuming you will create a Game component later
  };

  return (
    <div className="menu">
      <h1>Crawl!</h1>
      <button onClick={handlePlayClick} className="play-button">
        Jogar
      </button>
    </div>
  );
}
