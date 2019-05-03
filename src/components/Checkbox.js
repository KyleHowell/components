import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

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

const Checkbox = ({ checked, onChange }) => {
  const messageText = checked ? "On" : "Off";
  return (
    <Wrapper className="checkbox-component">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Message on={checked}>{messageText}</Message>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
