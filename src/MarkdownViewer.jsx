import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownViewer({ fileName }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Загрузка .md файла из public/markdown/
    fetch(`/markdown/${fileName}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Ошибка при загрузке Markdown:", error));
  }, [fileName]);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
