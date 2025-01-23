import React, { useState } from "react";
import Layout from "../components/Layout";
import ComplexNeutral from "../components/ComplexNeutral";
import { fetchWikiContent } from "../utils/fetchWikiContent";

const Group3: React.FC = () => {
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
