import React, { useState } from "react";

const FearPopup: React.FC<{ onDecision: () => void }> = ({ onDecision }) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="popup" style={{ color: "red" }}>
      <div className="popup-content">
        <p>
          Declining cookies may significantly limit functionality. Do you wish to
          continue?
        </p>
        <button
          onClick={() => {
            setIsVisible(false); // Close the popup
            onDecision(); // Trigger the decision callback
          }}
        >
          Accept All
        </button>
        <button
          onClick={() => {
            setIsVisible(false); // Close the popup
            onDecision(); // Trigger the decision callback
          }}
        >
          Decline All
        </button>
      </div>
    </div>
  ) : null;
};

export default FearPopup;
