import React from "react";
//import css
import "./Projects.css"
const ProjectElement = (props) => {
  return (
    <>
      <div className="project__container">
        <div className="project__container__title">
          <h2>{props.title}</h2>
        </div>
        <div className="project__container__content">
          {props.content.slice(0, 200)}
          {props.content.length > 200 ? "..." : ""}
        </div>
        <div className="tags">
          {props.tags.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProjectElement;
