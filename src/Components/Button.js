import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

class ButtonAction extends Component {
  render() {
    return (
      <>
        <Grid item>
          <a
            href={this.props.link}
            target={this.props.target}
            style={{
              textDecoration: "none"
            }}
          >
            <Button
              variant="contained"
              startIcon={this.props.icon}
              style={{
                backgroundColor: this.props.backgroundColor,
                color: this.props.color
              }}
            >
              {this.props.word}
            </Button>
          </a>
        </Grid>
      </>
    );
  }
}

export default ButtonAction;
