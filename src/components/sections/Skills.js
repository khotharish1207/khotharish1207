import React from "react";
import SkillsList from "../elements/SkillsList";
import Resume from "../../resume.json";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">
          <div className="my-3 column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-cogs"></i>
              </span>
              <h2 className="title is-5">DevOps</h2>
            </div>
            <SkillsList skills={Resume.skills["devOps"]} />
          </div>
          <div className="my-3 column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-laptop-code"></i>
              </span>
              <h2 className="title is-5">Software Development</h2>
            </div>
            <SkillsList skills={Resume.skills["softwareDevelopement"]} />
          </div>
        </div>
        <div className="columns">
          <div className="my-3 column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
                <i className="fas fa-3x fa-bug"></i>
              </span>
              <h2 className="title is-5">Testing</h2>
            </div>
            <SkillsList skills={Resume.skills["testing"]} />
          </div>
          <div className="my-3 column is-6">
            <div className="has-text-centered">
              <span className="icon has-text-link">
              <i class="fas fa-3x fa-briefcase"></i>
              </span>
              <h2 className="title is-5">Tools And Technologies</h2>
            </div>
            <SkillsList skills={Resume.skills["toolsAndTechnologies"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
