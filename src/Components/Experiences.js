import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { Work } from "@material-ui/icons";
import { workExperiences } from "../data";

class Education extends Component {
  render() {
    return (
      <>
        <h3 style={{ color: "#666", marginBottom: 0 }}>Experiences</h3>
        <List>
          {workExperiences.map((experience, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <Work />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<b>{experience.companyName}</b>}
                secondary={
                  <>
                    <p
                      style={{ margin: 0 }}
                    >{`${experience.monthIn} ${experience.yearIn} - ${experience.monthOut} ${experience.yearOut}`}</p>
                    <p
                      style={{ margin: 0 }}
                    >{`${experience.position} (${experience.status})`}</p>
                    <p style={{ margin: 0 }}>{`${experience.description}`}</p>
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
