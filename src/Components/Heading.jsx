import React from "react";
import { Link } from "@reach/router";
import { Header, Menu, Image } from "semantic-ui-react";
import employee from "../Img/employee.png";

export default function Heading() {
  return (
    <Menu
      secondary
      style={{
        maxWidth: "1400px",
        margin: "10px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Menu.Item name="home">
        <Header size="large" as={Link} to="/">
          NorthCoders
        </Header>
      </Menu.Item>

      <Menu.Item position="right">
        <Image
          avatar
          src={employee}
          alt="avatar for women from flaticon"
          as={Link}
          to="/users/jessjelly"
        />
        <span> JessJelly</span>
      </Menu.Item>
    </Menu>
  );
}
