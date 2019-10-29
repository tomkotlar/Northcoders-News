import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard(props) {
  return (
    <div>
      <h1> Article Card</h1>

      {props.articles.map((element, i) => (
        <p key={element.title}>
          <Link to={`/articles/${element.article_id}`}>
        
         <b> id: {element.article_id} </b>  
          <i>title: {element.title} </i>
       
         <b> comments:{element.comment_count}  </b>  
          </Link>
        </p>
      ))}
    </div>
  );
}
