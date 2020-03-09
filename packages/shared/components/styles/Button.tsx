import styled, { css } from "styled-components";

const disabledStyles = (secondary?: boolean) => css`
  cursor: not-allowed;
  color: ${secondary ? "grey" : "white"};
  background: ${secondary ? "transparent" : "grey"};
  border: ${secondary ? `1px solid grey` : "none"};

  :hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  font-family: inherit;
  line-height: 23px;
  font-size: 14px;
  width: 100%;
  margin-top: ${({ mobileMarginTop }: Props) => (mobileMarginTop ? `${mobileMarginTop}px` : "24px")};
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;
  color: ${({ secondary }: Props) => (secondary ? "red" : "white")};
  background: ${({ secondary }: Props) => (secondary ? "transparent" : "red")};
  border: ${({ secondary }: Props) => (secondary ? `1px solid red` : "none")};
  transition: all 100ms ease-in-out;
  /* allow for <Button as="a"> */
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  :hover {
    opacity: 0.8;
  }

  ${({ disabled, secondary }: Props) => !!disabled && disabledStyles(secondary)};
`;

export interface Props {
  mobileMarginTop?: number;
  secondary?: boolean;
  disabled?: boolean;
}

export default Button;
