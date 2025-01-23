import React from "react";

const SimpleFearInducing: React.FC<{ onDecision: () => void }> = ({ onDecision }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠ Warning: Declining cookies may result in limited functionality, slower performance, and restricted access to key features!
        </p>
        <button onClick={onDecision} style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}>
          ✅ Accept All & Enjoy Full Access
        </button>
        <button onClick={onDecision} style={{ backgroundColor: "gray", color: "white" }}>
          ⚠ Proceed With Limited Experience
        </button>
      </div>
    </div>
  );
};

export default SimpleFearInducing;
