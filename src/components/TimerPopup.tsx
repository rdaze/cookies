import React, { useState, useEffect } from "react";

const TimerPopup: React.FC<{ onDecision: (decision: string) => void }> = ({
  onDecision,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      onDecision("declined"); // Automatically decline when the timer runs out
    }
  }, [countdown, onDecision]);

  const handleAccept = () => {
    setIsVisible(false);
    onDecision("accepted");
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecision("declined");
  };

  return isVisible ? (
    <div className="popup">
      <div className="popup-content">
        <p>
          Accept cookies within {countdown} seconds to enhance your experience!
        </p>
        <button onClick={handleAccept}>Accept All</button>
        <button onClick={handleDecline}>Decline All</button>
      </div>
    </div>
  ) : null;
};

export default TimerPopup;
