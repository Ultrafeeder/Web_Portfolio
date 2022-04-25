import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProjectDesc = (props) => {
  let [data, setData] = useState(props.props);
  let location = useLocation();
  console.log(data);
  useEffect(() => {
    if (location.pathname === "/gateway") {
      setData(props.props[0]);
    } else if (location.pathname === "/ecommerce") {
      setData(props.props[1]);
    } else if (location.pathname === "/ecommerce_react") {
      setData(props.props[2]);
    } else if (location.pathname === "/code_for_justice") {
      setData(props.props[3]);
    } else if (location.pathname === "/tesla_clone") {
      setData(props.props[4]);
    } else if (!data || !location) {
      throw console.error();
    }
    console.log(data);
  });
  return (
    <div className="project-desc">
      <section className="project-header">
        <h1>{data.project_header}</h1>
      </section>
      <section className="project-img">
        <img src={data.screenshot} alt="project" />
      </section>
      <section className="project-desc-container">
        <p className="project-desc">{data.project_desc}</p>
      </section>
      <section className="project-tech">
        <h2>Tools and Languages</h2>
        <div className="project-tl">
          <p className="lang">{data.lang}</p>
          {data.framework ? <p>{data.framework}</p> : ""}
        </div>
      </section>
      <section className="project-links">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <span>View Website</span>
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <span>View Github</span>
        </a>
      </section>
    </div>
  );
};

export default ProjectDesc;
