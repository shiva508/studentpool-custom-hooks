import React from "react";
import sms from "./Section.module.css";
const Section = (props) => {
  return <section className={sms.section}>{props.children}</section>;
};

export default Section;
