import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import DefaultLayout from "./DefaultLayout";

function About(props) {
  const { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    axios.get(`/articles/${id}`).then((data) => {
      setArticle(data.data.data[0]);
    });
  }, []);

  return (
    <DefaultLayout>
      {article && (
        <Card id={article.id} title={article.title} body={article.text} />
      )}
    </DefaultLayout>
  );
}

export default About;
