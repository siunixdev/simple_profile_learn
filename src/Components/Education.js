import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { School } from "@material-ui/icons";
import { educations } from "../data";

class Education extends Component {
  render() {
    return (
      <>
        <h3 style={{ color: "#666", marginBottom: 0, marginTop: 40 }}>
          Education
        </h3>
        <List style={{ marginBottom: 40 }}>
          {educations.map((education, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <School />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<b>{education.name}</b>}
                secondary={
                  <>
                    <p
                      style={{ margin: 0 }}
                    >{`${education.yearIn} - ${education.yearOut}`}</p>
                    <p style={{ margin: 0 }}>{`${education.major}`}</p>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </>
    );
  }
}

export default Education;
