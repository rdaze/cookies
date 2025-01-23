import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ComplexFearInducing from "../components/ComplexFearInducing";
import { fetchWikiContent } from "../utils/fetchWikiContent";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Group4: React.FC = () => {
  const [hasMadeDecision, setHasMadeDecision] = useState(false);
  const [content, setContent] = useState<string>("Lade Inhalt...");

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
        group: "Group4",
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
      {!hasMadeDecision && <ComplexFearInducing onDecision={handleDecision} />}
      {hasMadeDecision && (
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
      )}
    </>
  );
};

export default Group4;
