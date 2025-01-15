import React from "react";

const SingleClickPopup: React.FC<{ onDecision: () => void }> = ({ onDecision }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>We use cookies to improve your experience. Do you accept?</p>
        <button onClick={onDecision}>Accept</button>
        <button onClick={onDecision}>Decline</button>
      </div>
    </div>
  );
};

export default SingleClickPopup;
