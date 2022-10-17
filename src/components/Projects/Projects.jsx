import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./AllProjects";
import ViewProject from "./ViewProject";
import "./Projects.css";
const Projects = () => {
  return (
    <div id="projects" className="projects__wrapper">
      <AllProjects />
    </div>
  );
};
export default Projects;
