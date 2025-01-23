import React, { useState } from "react";

const ComplexFearInducing: React.FC<{ onDecision: (accepted: boolean, interactionTime: number) => void }> = ({ onDecision }) => {
  const [step, setStep] = useState(1);
  const [declineLoading, setDeclineLoading] = useState(false);
  const [startTime] = useState<number>(Date.now());

  const handleAccept = () => {
    const interactionTime = Date.now() - startTime;
    onDecision(true, interactionTime);
  };

  const handleDeclineStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setDeclineLoading(true);
      setTimeout(() => {
        const interactionTime = Date.now() - startTime;
        onDecision(false, interactionTime);
      }, 3000);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {declineLoading ? (
          <>
            <p>Processing your request... This might take a while.</p>
            <p>Please do not close this window.</p>
          </>
        ) : (
          <>
            {step === 1 && (
              <>
                <h2>🍪 Manage Your Cookie Preferences</h2>
                <p>
                  Cookies help us provide a better experience. Without them, you might not be able to access key features.
                </p>
                <button className="accept" onClick={handleAccept}>
                  ✅ Accept All (Recommended)
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Manage Preferences
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>⚠ Are You Sure?</h2>
                <p>Without cookies, we cannot guarantee the best experience. You might face:</p>
                <ul>
                  <li>🔴 Slower loading times</li>
                  <li>🔴 Reduced personalization</li>
                  <li>🔴 Limited access to features</li>
                </ul>
                <button className="accept" onClick={handleAccept}>
                  ✅ Accept All (Recommended)
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Yes, I want a worse experience
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2>🛑 Final Confirmation</h2>
                <p>
                  Just one more step! Are you absolutely sure you want to decline <b>ALL</b> cookies? This decision is
                  irreversible for this session.
                </p>
                <p>We respect your choice, but we strongly recommend accepting cookies for a better experience.</p>
                <button className="accept" onClick={handleAccept}>
                  ✅ Accept All (Recommended)
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Yes, disable everything
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ComplexFearInducing;
