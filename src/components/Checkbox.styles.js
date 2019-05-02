import styled from "react-emotion";

export const Wrapper = styled.div`
  width: 140px;
  text-align: center;
`;

export const Message = styled.div`
  font-size: 24px;
  background-color: ${props => (props.on ? "green" : "red")};
  color: ${props => (props.on ? "white" : "black")};
  margin-top: 20px;
`;
