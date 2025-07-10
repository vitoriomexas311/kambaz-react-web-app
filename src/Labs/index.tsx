import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <div id="my-name-and-section">
        <h1> Vitorio Mexas </h1>
        <a
          id="wd-github"
          href="https://github.com/vitoriomexas311/kambaz-react-web-app"
        >
          GitHub Repository
        </a>
        <h2> CS 5610 Summer 2 | 7PM EST Tuesdays & Thursdays </h2>
      </div>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
