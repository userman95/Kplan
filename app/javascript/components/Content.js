import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import axios from "axios";
import ArticleList from "./ArticleList";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios.get("/articles.json").then((data) => {
      let sumData = [];
      data.data.data.map((data) => {
        sumData.push(data);
      });
      this.setState({ articles: [...sumData] });
    });
    console.log(
      "admin credentials \n password: password \n email: admin@example.com"
    );
  }

  render() {
    return (
      <Container maxWidth="xl">
        <Grid container wrap={"wrap"}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Content
            </Typography>
          </Grid>
          <ArticleList articles={this.state.articles} />
        </Grid>
      </Container>
    );
  }
}

export default Content;
