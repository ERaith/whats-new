import React, { Component } from "react";
import "./Menu.css";

// MENU COMPONENT CODE GOES HERE
class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: "local",
      isSidebarOpen:false,
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
  handleMenuButtonClick = () => {
    this.setState({isSidebarOpen:!this.state.isSidebarOpen})
  }
  render() {
    console.warn(this.state.isSidebarOpen)
    const { isSidebarOpen} = this.state;
    return (
      <React.Fragment>
        <button
          className = "menu-button"
          onClick = {this.handleMenuButtonClick}
        >
        Collapse Menu
      </button>
      <div className = {`menu ${isSidebarOpen ? 'show' : 'hide'}`}>
        {this.state.navNames.map(navName => (
          <a
            class={this.isActive(navName)}
            name={navName}
            onClick={event => this.updateState(event)}
          >
            {navName}
          </a>
        ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
