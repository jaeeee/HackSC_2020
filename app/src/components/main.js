import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage.js";
import CurrentStreams from "./CurrentStreams.js";
import Profile from './Profile';
import Categories from './Categories';
import Guide from "./Guide.js";
import Dashboard from "./Dashboard.js";
// import AboutMe from "./aboutme";
// import Contact from "./contact";
// import Projects from "./projects";
// import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/streams" component={CurrentStreams}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/categories" component={Categories}/>
    <Route path="/guide" component={Guide}/>
    <Route path="/dashboard" component={Dashboard}/>
    {/* <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} /> */}
  </Switch>
);

export default Main;
