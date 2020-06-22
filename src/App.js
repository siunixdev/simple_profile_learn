import React, { Component } from "react";
import "./App.css";
import { Card, Grid, CardContent, Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

// Import Component
import Header from "./Components/Header";
import ButtonAction from "./Components/Button";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experiences from "./Components/Experiences";

// Import Data
import { ProfileData, sosmedData } from "./data";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="background-header"></div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Card style={{ marginTop: 140, marginBottom: 40 }} elevation={5}>
            <CardContent>
              <Grid container spacing={3} style={{ marginBottom: 20 }}>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  style={{
                    paddingTop: 20,
                    paddingRight: 20,
                    paddingLeft: 20
                  }}
                >
                  <img
                    src={ProfileData.image}
                    alt={ProfileData.image}
                    width="100%"
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={12}
                  xs={12}
                  style={{ paddingRight: 20, paddingLeft: 20 }}
                >
                  <h1 style={{ marginBottom: "0px", color: "#808080" }}>
                    {ProfileData.name}
                  </h1>
                  <Grid
                    container
                    spacing={1}
                    style={{
                      display: "flex",
                      color: "#808080",
                      marginTop: 10
                    }}
                  >
                    {sosmedData.map((data, i) => (
                      <ButtonAction
                        key={i}
                        link={data.link}
                        target={data.target}
                        icon={<data.icon />}
                        backgroundColor={data.backgroundColor}
                        color={data.color}
                        word={data.word}
                      />
                    ))}
                  </Grid>
                  <p
                    style={{
                      textAlign: "justify",
                      lineHeight: 2,
                      marginTop: 30,
                      marginBottom: 40
                    }}
                  >
                    {ProfileData.description}
                  </p>
                  <Skills id="skills" />
                  <Education />
                  <Experiences />
                  <h3
                    style={{
                      color: "#666",
                      marginBottom: 20,
                      marginTop: "0px 40px"
                    }}
                  >
                    Portofolio
                  </h3>
                  <Carousel animation="slide">
                    <Paper
                      variant="outlined"
                      style={{ position: "relative", height: 400 }}
                    >
                      <div>
                        <div>
                          <div
                            style={{
                              width: 300,
                              height: 320,
                              backgroundColor: "#666",
                              padding: 40
                            }}
                          >
                            <h1 style={{ color: "#FFF" }}>fsdf</h1>
                            <p style={{ color: "#FFF" }}>Lorem Ipsum</p>
                          </div>
                        </div>
                      </div>
                    </Paper>
                    <Paper
                      variant="outlined"
                      style={{ position: "relative", height: 400 }}
                    >
                      <div>
                        <div>
                          <div
                            style={{
                              width: 300,
                              height: 320,
                              backgroundColor: "#666",
                              padding: 40
                            }}
                          >
                            <h1 style={{ color: "#FFF" }}>fsdf 1</h1>
                            <p style={{ color: "#FFF" }}>Lorem Ipsum</p>
                          </div>
                        </div>
                      </div>
                    </Paper>
                    <Paper variant="outlined" style={{ height: 400 }}></Paper>
                  </Carousel>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent style={{ height: 20, backgroundColor: "#20639b" }} />
          </Card>
        </div>
      </>
    );
  }
}

export default App;
