import React, { useState, useEffect } from "react";

const SimpleFearInducing: React.FC<{ onDecision: (accepted: boolean, interactionTime: number) => void }> = ({ onDecision }) => {
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleDecision = (accepted: boolean) => {
    const interactionTime = Date.now() - startTime;
    onDecision(accepted, interactionTime);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠ Warning: Declining cookies may result in limited functionality, slower performance, and restricted access to key features!
        </p>
        <button onClick={() => handleDecision(true)} style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}>
          ✅ Accept All & Enjoy Full Access
        </button>
        <button onClick={() => handleDecision(true)} style={{ backgroundColor: "gray", color: "white" }}>
          ⚠ Proceed With Limited Experience
        </button>
      </div>
    </div>
  );
};

export default SimpleFearInducing;
