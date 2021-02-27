import React from "react";

function SkillsList(props) {
  const skills = props.skills;
  return (
    <div>
      <hr />
      <div className="skill-list title is-5 is-spaced">{skills.join(', ')}</div>
      {/* <div className="skill-list title is-5 is-spaced">{buildSkills(skills)}</div> */}
    </div>
  );
}

function buildSkills(skills) {
  let progressBars = [];
  let counter = 0;
  skills.forEach((key, value) => {
    progressBars.push(
      <span
        key={counter}
        style={{ marginRight: "10px" }}
        className="title is-5 is-spaced"
      >
        {`${key}`}
      </span>
    );
    counter++;
  });
  return progressBars;
}

export default SkillsList;
