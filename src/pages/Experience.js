import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Halba High School, Halba, Lebanon
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Matn University College, Beirut, Lebanon
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer | Codi Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Beirut, Lebanon
          </h4>
          <ul>
            <li>
              Establishing projects using different Back-end languages including
              the NodeJs Express, PHP, Laravel, and SQL.
            </li>
            <li>
              {" "}
              Designing the Front-end of websites using JavaScript, React, and
              React Native.
            </li>
            <li>Managing the Server using LAMP Stack and Linux.</li>
            <li>
              Developing project management skills while applying the AGILE
              Methodology such as leading sprints.
            </li>
            <li>Operating WordPress as the Content Management System.</li>
            <li>
              Creating different types websites and applications including ERP
              dashboards.{" "}
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
