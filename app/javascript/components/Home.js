import React from "react";
import CarouselImages from "./CarouselImages";
import DefaultLayout from "./DefaultLayout";

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <CarouselImages />
      </DefaultLayout>
    );
  }
}

export default Home;
