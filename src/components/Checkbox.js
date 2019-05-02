import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message, Wrapper } from "./Checkbox.styles";

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  render() {
    const messageText = this.props.checked ? "On" : "Off";
    return (
      <Wrapper className="checkbox-component">
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <Message on={this.props.checked}>{messageText}</Message>
      </Wrapper>
    );
  }
}

export default Checkbox;
