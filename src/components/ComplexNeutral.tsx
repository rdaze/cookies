import React, { useState } from "react";

const ComplexNeutral: React.FC<{ onDecision: (accepted: boolean) => void }> = ({ onDecision }) => {
  const [step, setStep] = useState(1);
  const [declineLoading, setDeclineLoading] = useState(false);

  const handleAccept = () => onDecision(true);

  const handleDeclineStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setDeclineLoading(true);
      setTimeout(() => onDecision(false), 3000);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {declineLoading ? (
          <>
            <p>Applying your preferences...</p>
            <p>Please wait a moment.</p>
          </>
        ) : (
          <>
            {step === 1 && (
              <>
                <h2>🍪 Manage Your Cookie Preferences</h2>
                <p>
                  We use cookies to enhance your experience. You can accept all cookies or manage your preferences.
                </p>
                <button className="accept" onClick={handleAccept}>
                  Accept All
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Manage Preferences
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Customize Your Experience</h2>
                <p>You can choose which cookies you allow. Some cookies are necessary for basic functionality.</p>
                <ul>
                  <li>✔ Essential cookies (Required for the site to function)</li>
                  <li>⚙ Functional cookies (Improve usability and experience)</li>
                  <li>📊 Analytics cookies (Help us understand site usage)</li>
                </ul>
                <button className="accept" onClick={handleAccept}>
                  Accept All
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Continue Without Optional Cookies
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Final Confirmation</h2>
                <p>
                  By continuing without optional cookies, some features may not work as expected. You can change your
                  preferences anytime in the settings.
                </p>
                <button className="accept" onClick={handleAccept}>
                  Accept All
                </button>
                <button className="decline" onClick={handleDeclineStep}>
                  Confirm & Continue
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ComplexNeutral;
