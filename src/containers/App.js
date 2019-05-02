import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCheckbox } from "../actions/app";
import Checkbox from "../components/Checkbox";
import "./App.styles";

const mapStateToProps = state => ({
  checked: state.app.checked
});

class App extends Component {
  static propTypes = {
    checked: PropTypes.bool
  };

  onCheckboxChange = event => {
    this.props.dispatch(setCheckbox(event.target.checked));
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.props.checked}
          onChange={this.onCheckboxChange}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
