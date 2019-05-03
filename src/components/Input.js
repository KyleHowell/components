import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 140px;
  text-align: center;
`;

const Input = ({ value, onChange }) => {
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
