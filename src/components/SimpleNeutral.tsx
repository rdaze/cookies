import React, { useState, useEffect } from "react";

const SimpleNeutral: React.FC<{ onDecision: (accepted: boolean, interactionTime: number) => void }> = ({ onDecision }) => {
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
        <p>We use cookies to enhance your browsing experience. You can accept or decline at any time.</p>
        <button onClick={() => handleDecision(true)} style={{ backgroundColor: "green", color: "white" }}>
          Accept Cookies
        </button>
        <button onClick={() => handleDecision(false)} style={{ backgroundColor: "gray", color: "white" }}>
          Decline Cookies
        </button>
      </div>
    </div>
  );
};

export default SimpleNeutral;