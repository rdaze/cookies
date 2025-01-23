import React from "react";
import TriviaComponent from "../components/TriviaComponent";

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <h1>Welcome to the Research Challenge</h1>
            <p>
                Your task is to <strong>find three key pieces of information</strong> about <b>Wernher von Braun</b>, the aerospace engineer
                known for his contributions to rocket technology and space exploration.
            </p>
            <p>
                Below, you will find a short trivia quiz to test your knowledge. To research the answers, you will need to open your
                assigned group’s page by clicking one of the buttons below.
            </p>
            <p>
                <strong>How it works: </strong>
                Clicking on your group button will open a <b>new tab</b> where you can find the necessary information.
                Keep this page open so you can answer the trivia questions while reviewing the content in the other tab.
            </p>
            <p>
                Once you've gathered enough information, return to this tab and try to answer all questions correctly.
                Good luck, and enjoy the challenge!
            </p>

            <div className="button-container">
                <button onClick={() => window.open("/cookies/#/group1", "_blank")}>Open Group 1</button>
                <button onClick={() => window.open("/cookies/#/group2", "_blank")}>Open Group 2</button>
                <button onClick={() => window.open("/cookies/#/group3", "_blank")}>Open Group 3</button>
                <button onClick={() => window.open("/cookies/#/group4", "_blank")}>Open Group 4</button>
            </div>

            <TriviaComponent />
        </div>
    );
};

export default LandingPage;
