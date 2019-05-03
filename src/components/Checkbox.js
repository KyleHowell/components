import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Wrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: ${props => (props.checked ? "green" : "red")};
  border-radius: 25%;
`;

const Checkbox = ({ checked, onChange }) => (
  <Wrapper
    checked={checked}
    className="checkbox-component"
    onClick={onChange}
  />
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
