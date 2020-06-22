import React, { Component } from "react";
import { Chip } from "@material-ui/core";
import { skills } from "../data";

class Skills extends Component {
  render() {
    return (
      <>
        <h3 style={{ color: "#666" }}>Skills</h3>
        {skills.map((skill, i) => (
          <Chip
            label={skill}
            variant="outlined"
            style={{ marginRight: 10, marginBottom: 10 }}
            key={i}
          />
        ))}
      </>
    );
  }
}

export default Skills;
