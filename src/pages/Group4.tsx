import React, { useState } from "react";
import Layout from "../components/Layout";
import ComplexFearInducing from "../components/ComplexFearInducing";
import { fetchWikiContent } from "../utils/fetchWikiContent";

const Group4: React.FC = () => {
  const [hasMadeDecision, setHasMadeDecision] = useState(false);
  const [content, setContent] = useState<string>("Lade Inhalt...");

  React.useEffect(() => {
    const loadContent = async () => {
      const wikiContent = await fetchWikiContent("Wernher_von_Braun");
      setContent(wikiContent);
    };
    loadContent();
  }, []);

  const handleDecision = () => {
    setHasMadeDecision(true);
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
