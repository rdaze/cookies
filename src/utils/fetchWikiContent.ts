import axios from "axios";

export const fetchWikiContent = async (title: string): Promise<string> => {
    try {
        const response = await axios.get("https://de.wikipedia.org/w/api.php", {
            params: {
                action: "parse",
                page: title,
                format: "json",
                origin: "*",
                prop: "text",
            },
        });

        const htmlContent = response.data.parse.text["*"];

        // Use DOMParser to parse the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");

        // Remove the TOC by id
        const tocElement = doc.getElementById("toc");
        if (tocElement) {
            tocElement.remove();
        }

        // Remove all elements with class="mw-editsection"
        const mwEditElement = doc.querySelectorAll(".mw-editsection");
        mwEditElement.forEach((selection) => selection.remove());

        // Transform text-based <a> elements into plain text
        const anchorElements = doc.querySelectorAll("a");
        anchorElements.forEach((anchor) => {
            // Skip <a> elements that contain images
            if (anchor.querySelector("img")) return;

            // Replace <a> with its text content
            const text = anchor.textContent || ""; // Get the text inside the <a>
            const textNode = document.createTextNode(text); // Create a plain text node
            anchor.replaceWith(textNode); // Replace the <a> element with plain text
        });

        // Return the cleaned HTML
        return doc.body.innerHTML;
    } catch (error) {
        console.error("Error fetching Wikipedia content:", error);
        return "<p>Fehler beim Laden des Inhalts.</p>";
    }
};
