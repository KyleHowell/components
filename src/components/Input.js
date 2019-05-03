import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Wrapper = styled.div`
  width: 140px;
  text-align: center;
`;

const Message = styled.div`
  font-size: 24px;
  background-color: ${props => (props.on ? "green" : "red")};
  color: ${props => (props.on ? "white" : "black")};
  margin-top: 20px;
`;

const Input = ({ value, onChange }) => {
  console.log("taco");
  console.log(value);

  return (
    <Wrapper className="input-component">
      <input type="text" onChange={onChange} value={value} />
    </Wrapper>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
