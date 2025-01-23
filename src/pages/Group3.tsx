import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ComplexNeutral from "../components/ComplexNeutral";
import { fetchWikiContent } from "../utils/fetchWikiContent";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const getUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }
  return userId;
};

const Group3: React.FC = () => {
  const [hasMadeDecision, setHasMadeDecision] = useState(false);
  const [content, setContent] = useState<string>("Lade Inhalt...");
  const userId = getUserId();

  useEffect(() => {
    const loadContent = async () => {
      const wikiContent = await fetchWikiContent("Wernher_von_Braun");
      setContent(wikiContent);
    };
    loadContent();
  }, []);

  const handleDecision = async (accepted: boolean, interactionTime: number) => {
    setHasMadeDecision(true);
    try {
      await addDoc(collection(db, "userInteractions"), {
        userId: userId,
        group: "Group3",
        decision: accepted ? "Accepted" : "Declined",
        interactionTime: interactionTime,
        timestamp: new Date()
      });
      console.log("Data successfully sent to Firebase Firestore");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };  

  return (
    <>
      {!hasMadeDecision && <ComplexNeutral onDecision={handleDecision} />}
      {hasMadeDecision && (
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
      )}
    </>
  );
};
export default Group3;
