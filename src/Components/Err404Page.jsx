import React from "react";
import { Link } from "@reach/router";
import err404Page from "../Img/err404page.jpg";
import { Image, Header } from "semantic-ui-react";

export default function Err404Page(props) {
  return (
    <div>
      {props.err}
      <Image
        fluid
        src={err404Page}
        as={Link}
        to="/"
        alt="err page/ credit: www.freepik.com/pikisuperstar"
        target="_blank"
      />

      <Header as="h6" textAlign="center">
        Credit: pikisuperstar
      </Header>
    </div>
  );
}
