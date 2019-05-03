import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCheckbox, setInput } from "../actions/app";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import styled from "react-emotion";
import "./App.styles";

const Row = styled.div`
  padding: 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  > div:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const mapStateToProps = state => ({
  checked: state.app.checked,
  inputValue: state.app.inputValue
});

const mapDispatchtoProps = dispatch => {
  return {
    setCheckbox: payload => {
      dispatch(setCheckbox(payload));
    },
    setInput: payload => {
      dispatch(setInput(payload));
    }
  };
};

class App extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    inputValue: PropTypes.string,
    setCheckbox: PropTypes.function,
    setInput: PropTypes.function
  };

  onCheckboxChange = () => {
    this.props.setCheckbox(!this.props.checked);
  };

  onInputChange = e => {
    this.props.setInput(e.target.value);
  };

  render() {
    return (
      <Wrapper>
        <Row>
          <Checkbox
            checked={this.props.checked}
            onChange={this.onCheckboxChange}
          />
        </Row>
        <Row>
          <Input onChange={this.onInputChange} value={this.props.inputValue} />
        </Row>
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
