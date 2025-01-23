import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SimpleFearInducing from "../components/SimpleFearInducing";
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

const Group2: React.FC = () => {
  const [hasMadeDecision, setHasMadeDecision] = useState(false);
  const [content, setContent] = useState<string>("Loading content...");
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
        group: "Group2",
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
      {!hasMadeDecision && <SimpleFearInducing onDecision={handleDecision} />}
      {hasMadeDecision && (
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
      )}
    </>
  );
};

export default Group2;