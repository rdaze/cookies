import React from "react";

const SimpleNeutral: React.FC<{ onDecision: () => void }> = ({ onDecision }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>We use cookies to enhance your browsing experience. You can accept or decline at any time.</p>
        <button onClick={onDecision} style={{ backgroundColor: "green", color: "white" }}>
          Accept Cookies
        </button>
        <button onClick={onDecision} style={{ backgroundColor: "gray", color: "white" }}>
          Decline Cookies
        </button>
      </div>
    </div>
  );
};

export default SimpleNeutral;
