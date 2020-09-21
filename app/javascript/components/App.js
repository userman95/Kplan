import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";
import "../styles/style.scss";
import Navbar from "./Navbar";
import { StylesProvider } from "@material-ui/core/styles";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StylesProvider injectFirst={true}>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/content" component={Content} />
          <Route exact path="/article/:id" component={About} />
        </Switch>
      </StylesProvider>
    );
  }
}
export default App;
