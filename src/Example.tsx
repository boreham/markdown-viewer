import React from "react";
import MarkdownViewer from "./MarkdownViewer";

function Example() {
  return (
    <div>
      <h1>Мой Блог</h1>
      <h2>Первый пост</h2>
      {/* Здесь передаем название .md файла */}
      <MarkdownViewer fileName="example.md" />
    </div>
  );
}

export default Example;
