import styled from "styled-components";

const Button = styled.button`
  /* custom modified */
  width: ${props => (props.primary ? "35%" : "")};
  align-self: ${props => (props.primary ? "center" : "")};
  /* original */
  display: inline-block;
  background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  /* 0: small button. 0.33%: Bigger button */
  margin: ${props => (props.primary ? "0.33%" : "0")};
  padding: ${props => (props.primary ? "1.5rem" : "0.8rem 1.3rem")};
  border-radius: 0.1875rem;
  color: #fff;
  font-size: ${props => (props.primary ? "2rem" : "1rem")};
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: var(--main-red-hover);
  }
`;

export default Button;
