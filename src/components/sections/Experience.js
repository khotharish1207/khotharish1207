import React from "react";

import Timeline from "../elements/Timeline";
import getTheme from "../../themeUtil";

const theme = getTheme();

function Experience() {
  return (
    <section className={`section ${theme.backgroundClass}`} id="experience">
      <div className="container">
        <h1 className={`title ${theme.text1} `}>Experience</h1>
        <Timeline />
      </div>
    </section>
  );
}

export default Experience;
