import React from "react";

const Skill = (props) => {
  return (
    <li>
      <strong>{props.skill.title}</strong> - {props.skill.descriotion}
    </li>
  );
};

export default Skill;
