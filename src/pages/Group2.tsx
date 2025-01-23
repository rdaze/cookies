import React, { useState } from "react";
import Layout from "../components/Layout";
import SimpleFearInducing from "../components/SimpleFearInducing";
import { fetchWikiContent } from "../utils/fetchWikiContent";

const Group2: React.FC = () => {
  const [hasMadeDecision, setHasMadeDecision] = useState(false);
  const [content, setContent] = useState<string>("Loading content...");

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