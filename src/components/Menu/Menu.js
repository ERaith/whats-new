import React, { Component } from "react";
import "./Menu.css";

// MENU COMPONENT CODE GOES HERE
class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: "local",
      navNames: ["local", "health", "science", "technology", "entertainment"],
    };
  }

  updateState = event => {
    const filterKey = event.target.name;
    this.setState({ active: filterKey });
    this.filter(filterKey);
  };

  filter = filterKey => {
    this.props.filterNews(filterKey);
  };

  isActive = navName => {
    if (navName === this.state.active) {
      return "nav nav-active";
    } else {
      return "nav";
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.navNames.map(navName => (
          <a
            class={this.isActive(navName)}
            name={navName}
            onClick={event => this.updateState(event)}
          >
            {navName}
          </a>
        ))}
      </React.Fragment>
    );
  }
}

export default Menu;
