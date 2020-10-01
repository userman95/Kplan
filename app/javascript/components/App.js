import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";
import "../styles/style.scss";
import Navbar from "./Navbar";
import { SideMenu } from "./styled.js";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { StylesProvider } from "@material-ui/core/styles";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StylesProvider injectFirst={true}>
        <Navbar />
        <SideMenu variant="permanent">
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SideMenu>
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
