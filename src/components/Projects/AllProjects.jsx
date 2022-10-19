import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProjectElement from "./ProjectElement";
import { ProjectsData } from "./ProjectsData";
import { encodeURL } from "./util";
import "./Projects.css"
const AllProjects = () => {
  return (
    <section className="projects__section">
      <h1>Our Open Source Projects</h1>
      <div className="allProjects">
        {ProjectsData.map((Project) => (
          <Link
            className={"styles"}
            to={{
              pathname: `${encodeURL(Project.title)}`,
            }}
          >
            <ProjectElement
              title={Project.title}
              author={Project.author}
              data={Project.date}
              content={Project.content}
              tags={Project.tags}
              keys={Project.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default AllProjects
