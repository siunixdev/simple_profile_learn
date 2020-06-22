import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <>
        <AppBar className="appbar">
          <Toolbar
            style={{
              width: "80%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dashboard style={{ marginRight: 10 }} />
              <Typography variant="h6" color="inherit">
                <b>SIUNIX</b>
              </Typography>
            </div>
            {/* <div>
              <a href="#skills">
                <Button color="inherit">Skills</Button>
              </a>
            </div> */}
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
