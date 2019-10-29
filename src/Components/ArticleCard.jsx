import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard(props) {
  return (
    <div>
      <h1> Article Card</h1>

      {props.articles.map((element, i) => (
        <p key={element.title}>
          <Link to={`/articles/${element.article_id}`}>
        
            {element.title} {element.article_id}
          </Link>
        </p>
      ))}
    </div>
  );
}
