import React from "react";
import getTheme from '../../themeUtil'
const theme = getTheme()

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      {/* <div className="timeline-marker is-image is-32x32">
        <i class="fa fa-flag"></i>
      </div> */}
      <div class="timeline-marker is-icon">
        <i class="fa fa-flag"></i>
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className={`title is-4 ${theme.text2}`}>{props.company}</h1>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
