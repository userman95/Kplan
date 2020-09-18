import React, { useEffect, useState } from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  let breakpoint;
  console.log(windowSize);
  switch (true) {
    case windowSize.width > 0 && windowSize.width <= 600:
      breakpoint = 12;
      break;
    case windowSize.width > 600 && windowSize.width <= 1280:
      breakpoint = 6;
      break;
    case windowSize.width > 1280 && windowSize.width <= 1600:
      breakpoint = 4;
      break;
    case windowSize.width > 1600:
      breakpoint = 3;
      break;
    default:
      breakpoint = 3;
      break;
  }

  return breakpoint;
}

export default function ArticleList(props) {
  const breakpoint = useWindowSize();
  return (
    <Grid item container direction="row" wrap="wrap" spacing={2}>
      {props.articles.map((article) => (
        <Grid item xs={breakpoint}>
          <Card
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.text}
          />
        </Grid>
      ))}
    </Grid>
  );
}
