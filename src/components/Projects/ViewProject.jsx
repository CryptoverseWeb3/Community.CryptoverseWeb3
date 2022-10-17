import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import "./Projects.css";
import { encodeURL } from "./util";
import { ProjectsData } from "./ProjectsData";
const ViewProject = (props) => {
  const { title } = useParams();
  let searchedProject = ProjectsData.find(
    (Project) => encodeURL(Project.title).toLowerCase() === title.toLowerCase()
  );
  return (
    <section className="single__project__view">
      <div className="viewProject">
        <h1>{searchedProject.title}</h1>
        <p>{searchedProject.content}</p>
      </div>
      <div className="tags">
        {searchedProject.tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};
export default ViewProject;
