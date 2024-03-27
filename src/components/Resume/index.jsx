import { useState } from "react";
import "./resume.css";
import Skills from "../Skills";
import Education from "../Education";
import Experience from "../Experience";
const Resume = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="resume-section">
      <div className="all-buttons">
        <button
          className={selectedTab === 1 ? "active" : "inactive"}
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          SKILLS
        </button>
        <button
          className={selectedTab === 2 ? "active" : "inactive"}
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          EXPERIENCE
        </button>
        <button
          className={selectedTab === 3 ? "active" : "inactive"}
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          EDUCATION
        </button>
      </div>
      {selectedTab === 1 ? (
        <Skills />
      ) : selectedTab === 2 ? (
        <Experience />
      ) : (
        <Education />
      )}
    </div>
  );
};
export default Resume;
