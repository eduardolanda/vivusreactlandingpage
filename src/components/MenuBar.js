import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router";

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Eduardo Landa"
          active={activeItem === "Eduardo Landa"}
          onClick={this.handleItemClick}
          as={Link}
          to="/eduardolanda"
        >
          Eduardo Landa
        </Menu.Item>

        <Menu.Item
          name="LinkedIn"
          active={activeItem === "LinkedIn"}
          onClick={this.handleItemClick}
          as={Link}
          to="/linkedin"
        >
          LinkedIn
        </Menu.Item>

        <Menu.Item
          name="Github"
          active={activeItem === "Github"}
          onClick={this.handleItemClick}
          as={Link}
          to="/github"
        >
          Github
        </Menu.Item>
      </Menu>
    );
  }
}
